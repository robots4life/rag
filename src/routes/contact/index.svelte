<script>
	export let messages;

	let messageData =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus facere fuga eaque repudiandae, quidem exercitationem vitae eum, alias sed distinctio neque ipsum dolores maxime. Harum nobis expedita deserunt voluptatum aperiam!';
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

<form action="/contact" method="post" autocomplete="off">
	<input bind:value="{messageData}" aria-label="Enter your Message" name="message" type="text" />
	<button class="btn" type="submit">Send Your Message</button>
</form>
