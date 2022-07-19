export const get = async ({ url }) => {
	console.log('get request received');
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

	// submit the native form data and return to the from page
	return {
		status: 303,
		headers: {
			location: '/contact'
		}
		// body: {
		// 	message_name: url.searchParams.get('message_name'),
		// 	message_text: url.searchParams.get('message_text')
		// }
	};
};

export const post = async ({ request }) => {
	console.log('post request received');
	//
	// get formData
	const form = await request.formData();
	console.log(form);

	// submit the native form data and return to the from page
	return {
		status: 303,
		headers: {
			location: '/contact'
		}
	};
};
