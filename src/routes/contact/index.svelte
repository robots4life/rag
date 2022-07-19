<script>
	export let messages;

	let messageName = 'Mary';
	let messageText = 'Lorem ipsum dolor sit amet.';
</script>

<!-- {JSON.stringify(messages, null, 2)} -->

<h1 class="text-8xl text-center my-8">Send Your Messge</h1>
<hr />

<div class="w-full text-2xl text-center py-8" action="/contact" method="get">
	<form class="py-8">
		<div class="py-2">
			<label class="block text-gray-700 font-bold py-2" for="message_name"> Name </label>
			<input
				class="shadow appearance-none w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center py-2"
				id="message_name"
				name="message_name"
				type="text"
				placeholder="Your Name"
				bind:value="{messageName}"
			/>
		</div>
		<div class="py-2">
			<label class="block text-gray-700 font-bold py-2" for="message_text"> Message </label>
			<input
				class="shadow appearance-none w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center py-2"
				id="message_text"
				name="message_text"
				type="text"
				placeholder="Your Message"
				bind:value="{messageText}"
			/>
		</div>
		<div class="flex justify-center py-2">
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline py-4 px-8"
				type="submit"
			>
				Submit Your Message
			</button>
		</div>
	</form>
</div>

<!-- <h1 class="text-8xl text-center my-8">Contact Us Now</h1>
<hr /> -->

{#if messages}
	<div class="w-full text-2xl text-center py-8">
		<h2 class="text-6xl">Messages</h2>
		{#each messages as message, index}
			<div class="text-2xl py-8">
				<p class="border">{index + 1}</p>
				<div class="flex flex-row py-2">
					<p class="basis-1/2 border">ID :</p>
					<p class="basis-1/2 border">{message.id}</p>
				</div>
				<div class="flex flex-row py-2">
					<p class="basis-1/2 border">Text :</p>
					<p class="basis-1/2 border">{message.text}</p>
				</div>
				<div class="flex flex-row py-2">
					<p class="basis-1/2 border">DateTime :</p>
					<p class="basis-1/2 border">{message.submitDateTimeUnix}</p>
				</div>
				<hr />
			</div>
		{/each}
	</div>
{/if}
