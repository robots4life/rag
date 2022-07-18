import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

const GRAPH_CMS_MESSAGE_TOKEN = process.env['GRAPH_CMS_MESSAGE_TOKEN'];
const requestHeaders = { authorization: 'Bearer ' + GRAPH_CMS_MESSAGE_TOKEN };

export async function get() {
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
		const messages = await client.request(getMessages, requestHeaders);
		console.log(JSON.stringify(messages, undefined, 2));
		return {
			status: 200,
			body: messages
		};
	} catch (error) {
		console.error(JSON.stringify(error, undefined, 2));
		process.exit(1);
	}
}
