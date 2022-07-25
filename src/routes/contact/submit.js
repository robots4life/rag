import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

const GRAPH_CMS_MESSAGE_TOKEN = process.env['GRAPH_CMS_MESSAGE_TOKEN'];

// on update -
// 1. Endpoint method "get" has changed to "GET". See https://github.com/sveltejs/kit/discussions/5359

// GET
export const GET = async ({ url }) => {
	console.log('GET request received');
	//
	// get search parameters from a native form method get request
	console.log(url.searchParams.get('message_name'));
	console.log(url.searchParams.get('message_text'));

	// show the data as JSON on the /contact/submit page
	// return {
	// 	status: 200,
	// 	body: {
	// 		message_name: url.searchParams.get('message_name'),
	// 		message_text: url.searchParams.get('message_text')
	// 	}
	// };

	console.log('GET request end');
	// submit the native form data and return to the from page
	return {
		status: 303,
		headers: {
			location: '/contact'
		}
	};
};

// POST
export const POST = async ({ request }) => {
	console.log('POST request received');
	//
	// get formData
	const formData = await request.formData();

	// https://youtu.be/nmX-utfgeK4?t=403 !!!
	const messageName = formData.has('message_name') ? formData.get('message_name').toString() : '';
	console.log(messageName);

	const messageText = formData.has('message_text') ? formData.get('message_text').toString() : '';
	console.log(messageText);

	// const messageDateTime = formData.has('message_date_time')
	// 	? formData.get('message_date_time').toString()
	// 	: '';
	// console.log(messageDateTime);

	const messageDateTime = formData.has('message_date_time')
		? JSON.parse(formData.get('message_date_time'))
		: '';
	console.log(messageDateTime);

	if (messageDateTime) {
		console.log('messageDateTime is an object');

		// https://github.com/prisma-labs/graphql-request#incrementally-setting-headers
		client.setHeader('authorization', GRAPH_CMS_MESSAGE_TOKEN);

		// const playgroundVars = { name: 'Jane', text: 'Lorem !', submitDateTimeJson: { a: 'b' } };

		const variables = {
			name: messageName,
			text: messageText,
			submitDateTimeJson: messageDateTime
		};

		// https://github.com/prisma-labs/graphql-request#error-handling
		try {
			const createdMessage = await client.request(createMessage, variables);
			// console.log(JSON.stringify(createdMessage, undefined, 2));
			try {
				const messageID = { id: createdMessage.createMessage.id };
				const publishedMessage = await client.request(publishMessage, messageID);
				let returnedMessage = JSON.stringify(publishedMessage);
				console.log(returnedMessage);
				console.log('POST request end');
				return {
					status: 303,
					headers: {
						location: '/contact'
					}
				};
			} catch (error) {
				console.error(JSON.stringify(error, undefined, 2));
				process.exit(1);
			}
		} catch (error) {
			console.error(JSON.stringify(error, undefined, 2));
			process.exit(1);
		}
	}

	// const something = async () => {

	// }

	// something.onEvent(async function doSomethingElse(){
	// 	console.log('Hello something else');
	// 	// error => 
	// })
	async function createMessage(variables) {
		const createMessage = gql`
			mutation createMessage($name: String!, $text: String!, $submitDateTimeJson: Json!) {
				createMessage(
					data: { name: $name, text: $text, submitDateTimeJson: $submitDateTimeJson }
				) {
					id
					name
					text
					submitDateTimeJson
				}
			}
		`;
		const createdMessage = await client.request(createMessage, variables);
		return createdMessage.createMessage.id;
	}

	async function publishMessage(messageId) {
		const publishMessage = gql`
			mutation publishMessage($id: ID!) {
				publishMessage(where: { id: $id }, to: PUBLISHED) {
					id
				}
			}
		`;
		const messageID = { id: messageId };
		const publishedMessage = await client.request(publishMessage, messageID);
		let returnedMessage = JSON.stringify(publishedMessage);
		console.log(returnedMessage);
		console.log('POST request end');
	}

	try {
		const messageId = await createMessage(variables);
		await publishMessage(messageId);
	} catch (error) {
		console.error(JSON.stringify(error, undefined, 2));
		process.exit(1);
	}try {
		const messageId = await createMessage(variables);
		await publishMessage(messageId);
	} catch (error) {
		console.error(JSON.stringify(error, undefined, 2));
		process.exit(1);
	}

	return {
		status: 303,
		headers: {
			location: '/contact'
		}
	};

	return {
		status: 303,
		headers: {
			location: '/contact'
		}
	};

	// return {
	// 	status: 200
	// };

	console.log('POST request end');
	// submit the native form data and return to the from page
	return {
		status: 303,
		headers: {
			location: '/contact'
		}
	};

	// return {
	// 	status: 200,
	// 	body: {
	// 		name: formData.has('message_name') ? formData.get('message_name').toString() : '',
	// 		message: formData.has('message_text') ? formData.get('message_text').toString() : '',
	// 		dateTime: formData.has('message_date_time')
	// 			? JSON.parse(formData.get('message_date_time'))
	// 			: ''
	// 	}
	// };
};

// PUT
// override method - <form class="py-8" action="/contact/submit?_method=PUT" method="POST">
export const PUT = async ({ request }) => {
	console.log('PUT request received');
	//
	// get formData
	const formData = await request.formData();

	// https://youtu.be/nmX-utfgeK4?t=403 !!!
	const messageName = formData.has('message_name') ? formData.get('message_name').toString() : '';
	console.log(messageName);

	const messageText = formData.has('message_text') ? formData.get('message_text').toString() : '';
	console.log(messageText);

	// submit the native form data and return to the from page
	// return {
	// 	status: 303,
	// 	headers: {
	// 		location: '/contact'
	// 	}
	// };

	console.log('PUT request end');
	return {
		status: 200,
		body: {
			name: formData.has('message_name') ? formData.get('message_name').toString() : '',
			message: formData.has('message_text') ? formData.get('message_text').toString() : ''
		}
	};
};

// DELETE
// override method - <form class="py-8" action="/contact/submit?_method=DELETE" method="POST">
export const DEL = async ({ request }) => {
	console.log('DELETE request received');
	//
	// get formData
	const formData = await request.formData();

	// https://youtu.be/nmX-utfgeK4?t=403 !!!
	const messageName = formData.has('message_name') ? formData.get('message_name').toString() : '';
	console.log(messageName);

	const messageText = formData.has('message_text') ? formData.get('message_text').toString() : '';
	console.log(messageText);

	// submit the native form data and return to the from page
	// return {
	// 	status: 303,
	// 	headers: {
	// 		location: '/contact'try {
		const messageId = await createMessage(variables);
		await publishMessage(messageId);
	} catch (error) {
		console.error(JSON.stringify(error, undefined, 2));
		process.exit(1);
	}

	return {
		status: 303,
		headers: {
			location: '/contact'
		}
	};
	// 	}
	// };

	console.log('DELETE request end');
	return {
		status: 200,
		body: {
			name: formData.has('message_name') ? formData.get('message_name').toString() : '',
			message: formData.has('message_text') ? formData.get('message_text').toString() : ''
		}
	};
};
