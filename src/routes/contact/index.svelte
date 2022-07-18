<script>
	export let messages;
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
	<input
		aria-label="Enter your Tweet"
		name="tweet"
		placeholder="What's your hot take?"
		type="text"
	/>
	<button class="btn" type="submit">
		<!-- {charactersLeft === maxCharacters ? 'Tweet' : charactersLeft} -->
		Click
	</button>
</form>
