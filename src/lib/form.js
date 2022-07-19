export const enhance = (form) => {
	async function handleSubmit(event) {
		//
		//
		console.log(event);
		event.preventDefault();

		const response = await fetch(form.action, {
			method: form.method,
			headers: { accept: 'application/json' },
			body: new FormData(form)
		});

		if (!response.ok) {
			console.error(await response.text());
		}
	}

	form.addEventListener('submit', handleSubmit);

	return {
		destroy() {
			form.removeEventListener('submit', handleSubmit);
		}
	};
};
