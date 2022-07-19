// https://dailydevsblog.com/troubleshoot/resolved-get-params-url-with-sveltekit-endpoint-48557/

export const get = async ({ url }) => {
	//
	// get search parameters from a native form method get request
	console.log(url.searchParams.get('message_name'));
	console.log(url.searchParams.get('message_text'));

	return {
		status: 200,
		body: 'ok'
	};
};
