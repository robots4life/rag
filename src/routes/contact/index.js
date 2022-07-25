import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

const MESSAGE_TOKEN = process.env['MESSAGE_TOKEN'];

// on update -
// 1. Endpoint method "get" has changed to "GET". See https://github.com/sveltejs/kit/discussions/5359

// GET
export const GET = async () => {
	console.log('GET request received');

	// https://github.com/prisma-labs/graphql-request#incrementally-setting-headers
	client.setHeader('authorization', MESSAGE_TOKEN);

	const getMessages = gql`
		query getMessages {
			messages(first: 1000) {
				id
				name
				text
				submitDateTimeJson
			}
		}
	`;
	// https://github.com/prisma-labs/graphql-request#error-handling
	try {
		const messages = await client.request(getMessages);
		// console.log(JSON.stringify(messages, undefined, 2));
		// console.log(Date.now());
		console.log('GET request end');
		return {
			status: 200,
			body: messages
		};
	} catch (error) {
		console.error(JSON.stringify(error, undefined, 2));
		process.exit(1);
	}
};
