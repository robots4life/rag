import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export async function get(request) {
	try {
		console.log(Date.now());
		console.log(request.url.href);
		console.log('contact index.js - GetMessages');

		const query = gql`
			query GetMessages {
				messages {
					id
					text
				}
			}
		`;

		const { messages } = await client.request(query);
		console.log(messages);

		return {
			status: 200,
			body: {
				messages
			}
		};
	} catch (error) {
		return {
			status: 500,
			body: {
				error: 'Server error : ' + error
			}
		};
	}
}
