<script>
	export let messages;

	let messageData =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla mollitia dignissimos.';

	async function handleSubmit() {
		let payload = {
			messageData
		};
		let payloadJSON = JSON.stringify(payload);
		console.log(payloadJSON);
		try {
			const response = await fetch('/contact', {
				method: 'POST',
				headers: { accept: 'application/json' },
				body: payloadJSON
			});
			console.log('Message sent..');
		} catch (error) {
			console.log(error);
		}
	}
</script>

<h1>Contact Us Now</h1>

<!-- {JSON.stringify(messages, null, 2)} -->

{#each messages as message, index}
	<p>{index + 1}</p>
	<p>{message.id}</p>
	<p>{message.text}</p>
	<p>{message.submitDateTimeUnix}</p>
	<hr />
{/each}

<form on:submit|preventDefault="{handleSubmit}" action="/contact" method="post">
	<input type="text" aria-label="Enter your text" bind:value="{messageData}" name="message" />
	<button type="submit">Submit</button>
</form>
