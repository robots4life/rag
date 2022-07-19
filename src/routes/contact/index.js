import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

const GRAPH_CMS_MESSAGE_TOKEN = process.env['GRAPH_CMS_MESSAGE_TOKEN'];

// https://github.com/prisma-labs/graphql-request#incrementally-setting-headers
client.setHeader('authorization', GRAPH_CMS_MESSAGE_TOKEN);

export const get = async ({ request }) => {
	// const data = await request;
	// console.log(data);

	const getMessages = gql`
		query getMessages {
			messages(first: 1000) {
				id
				text
				submitDateTimeUnix
			}
		}
	`;
	// https://github.com/prisma-labs/graphql-request#error-handling
	try {
		const messages = await client.request(getMessages);
		// console.log(JSON.stringify(messages, undefined, 2));
		// console.log(Date.now());
		return {
			status: 200,
			body: messages
		};
	} catch (error) {
		console.error(JSON.stringify(error, undefined, 2));
		process.exit(1);
	}
};

export const post = async () => {
	return {
		status: 200
	};
};
