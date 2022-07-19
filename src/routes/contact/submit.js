export const get = async ({ url }) => {
	//
	// get search parameters from a native form method get request
	console.log(url.searchParams.get('message_name'));
	console.log(url.searchParams.get('message_text'));

	return {
		status: 200,
		body: {
			name: url.searchParams.get('message_name'),
			text: url.searchParams.get('message_text')
		}
	};
};
