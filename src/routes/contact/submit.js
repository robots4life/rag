export const get = async ({ url }) => {
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

	// submit the native form data and return to the from page
	return {
		status: 303,
		headers: {
			location: '/contact'
		}
	};
};

export const post = async ({ request }) => {
	console.log('POST request received');
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

	return {
		status: 200,
		body: {
			name: formData.has('message_name') ? formData.get('message_name').toString() : '',
			message: formData.has('message_text') ? formData.get('message_text').toString() : ''
		}
	};
};

// override method - <form class="py-8" action="/contact/submit?_method=PUT" method="POST">
export const put = async ({ request }) => {
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

	return {
		status: 200,
		body: {
			name: form.has('message_name') ? form.get('message_name').toString() : '',
			message: form.has('message_text') ? form.get('message_text').toString() : ''
		}
	};
};

// override method - <form class="py-8" action="/contact/submit?_method=DELETE" method="POST">
export const del = async ({ request }) => {
	console.log('DELETE request received');
	//
	// get formData
	const formData = await request.formData();

	// https://youtu.be/nmX-utfgeK4?t=403 !!!
	const messageName = form.has('message_name') ? form.get('message_name').toString() : '';
	console.log(messageName);

	const messageText = form.has('message_text') ? form.get('message_text').toString() : '';
	console.log(messageText);

	// submit the native form data and return to the from page
	// return {
	// 	status: 303,
	// 	headers: {
	// 		location: '/contact'
	// 	}
	// };

	return {
		status: 200,
		body: {
			name: form.has('message_name') ? form.get('message_name').toString() : '',
			message: form.has('message_text') ? form.get('message_text').toString() : ''
		}
	};
};
