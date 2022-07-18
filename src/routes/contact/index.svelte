<script>
	export let messages;

	let messageData = '';

	async function handleSubmit() {
		console.log('Message sent..');
		console.log(messageData);

		try {
			const response = await fetch('/contact', {
				method: 'POST',
				//
				headers: { accept: 'application/json' },
				body: new FormData(JSON.stringify(messageData))
			});
		} catch (error) {}
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
