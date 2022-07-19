import { invalidate } from '$app/navigation';

// export const enhance = (form, { result } = {}) => {
export const enhance = (form) => {
	async function handleSubmit(event) {
		//
		//
		console.log(event);
		event.preventDefault();

		const form = event.target;
		console.log(form);

		const response = await fetch(form.action, {
			method: form.method,
			headers: { accept: 'application/json' },
			body: new FormData(form)
		});

		if (!response.ok) {
			console.error(await response.text());
		}

		const url = new URL(form.action);
		console.log(url);
		url.search = '';
		url.hash = '';
		invalidate(url.href);
	}

	form.addEventListener('submit', handleSubmit);

	return {
		destroy() {
			form.removeEventListener('submit', handleSubmit);
		}
	};
};
