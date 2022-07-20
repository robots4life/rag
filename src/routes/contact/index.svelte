<script>
	import { enhance } from '$root/lib/form';
	export let messages;
	// console.log(messages);

	// const submitDateTimeJson = messages.map((element) => {
	// 	console.log(element.submitDateTimeJson.ms);
	// });

	let messageName = 'Mary';
	let messageText = 'Lorem ipsum dolor sit amet.';
	let date = new Date();
	let messageDateTimeObject = {
		string: date.toString(),
		utc: date.toUTCString(),
		date: date.toLocaleDateString(),
		time: date.toLocaleTimeString(),
		json: date.toJSON(),
		iso: date.toISOString(),
		ms: date.getMilliseconds()
	};
	// console.log(messageDateTimeObject);
	// console.log(JSON.stringify(messageDateTimeObject));
	let messageDateTime = JSON.stringify(messageDateTimeObject);

	export const handleSubmit = async (event) => {
		console.log(event);

		const form = event.target;
		console.log(form);

		try {
			const response = await fetch('/contact/submit', {
				method: 'POST',
				headers: { accept: 'application/json' },
				body: new FormData(form)
			});
			// reset the form after submit
			// form.reset();
		} catch (error) {
			console.log(error);
		}
	};

	// export const handleSubmitAPI = async (event) => {
	// 	console.log(event);
	// 	const form = event.target;
	// 	console.log(form);
	// };
</script>

<!-- {JSON.stringify(messages, null, 2)} -->

<h1 class="text-8xl text-center my-8">Send Your Messge</h1>
<hr />

<p>Local</p>
<div class="w-full text-2xl text-center py-8">
	<!-- POST request form without ?_method=POST and without method="POST" defaults to the GET request -->
	<!-- <form id="local" class="py-8" action="/contact/submit"> -->
	<!--  -->

	<!-- POST request without ?_method=POST defaults to the POST request with method="POST"-->
	<form id="local" class="py-8" action="/contact/submit" method="POST">
		<!--  -->

		<!-- PUT request with method parameter set to PUT with method="POST"-->
		<!-- <form class="py-8" action="/contact/submit?_method=PUT" method="POST"> -->
		<!--  -->

		<!-- DELETE request with method parameter set to DELETE with method="POST"-->
		<!-- <form class="py-8" action="/contact/submit?_method=DELETE" method="POST"> -->
		<!--  -->
		<!--  -->

		<!-- -------------- -->
		<!-- handleSubmit   -->
		<!-- -------------- -->
		<!-- <form
		id="local"
		on:submit|preventDefault="{handleSubmit}"
		class="py-8"
		action="/contact/submit"
		method="POST"
		> -->
		<!-- -------------- -->
		<!-- enhance action -->
		<!-- -------------- -->
		<!-- <form use:enhance class="py-8" action="/contact/submit" method="POST"> -->
		<div class="py-2">
			<label class="block text-gray-700 font-bold py-2" for="name">Name</label>
			<input
				class="shadow appearance-none w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center py-2"
				id="name"
				name="message_name"
				type="text"
				placeholder="Your Name"
				bind:value="{messageName}"
			/>
		</div>
		<div class="py-2">
			<label class="block text-gray-700 font-bold py-2" for="text">Message</label>
			<input
				class="shadow appearance-none w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center py-2"
				id="text"
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
				form="local"
			>
				Submit Your Message
			</button>
		</div>
	</form>
</div>

<p>API</p>
<div class="w-full text-2xl text-center py-8">
	<!-- POST request form without ?_method=POST and without method="POST" defaults to the GET request -->
	<!-- <form id="local" class="py-8" action="/contact/submit"> -->
	<!--  -->

	<!-- POST request without ?_method=POST defaults to the POST request with method="POST"-->
	<form id="api" class="py-8" action="/contact/submit" method="POST">
		<!--  -->

		<!-- PUT request with method parameter set to PUT with method="POST"-->
		<!-- <form class="py-8" action="/contact/submit?_method=PUT" method="POST"> -->
		<!--  -->

		<!-- DELETE request with method parameter set to DELETE with method="POST"-->
		<!-- <form class="py-8" action="/contact/submit?_method=DELETE" method="POST"> -->
		<!--  -->
		<!--  -->

		<!-- -------------- -->
		<!-- handleSubmit   -->
		<!-- -------------- -->
		<!-- <form
		id="local"
		on:submit|preventDefault="{handleSubmit}"
		class="py-8"
		action="/contact/submit"
		method="POST"
		> -->
		<!-- -------------- -->
		<!-- enhance action -->
		<!-- -------------- -->
		<!-- <form use:enhance class="py-8" action="/contact/submit" method="POST"> -->
		<div class="py-2">
			<label class="block text-gray-700 font-bold py-2" for="name">Name</label>
			<input
				class="shadow appearance-none w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center py-2"
				id="name"
				name="message_name"
				type="text"
				placeholder="Your Name"
				bind:value="{messageName}"
			/>
		</div>
		<div class="py-2">
			<label class="block text-gray-700 font-bold py-2" for="text">Message</label>
			<input
				class="shadow appearance-none w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center py-2"
				id="text"
				name="message_text"
				type="text"
				placeholder="Your Message"
				bind:value="{messageText}"
			/>
		</div>
		<div class="py-2">
			<label class="block text-gray-700 font-bold py-2" for="number">Date & Time</label>
			<input
				class="shadow appearance-none w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center py-2"
				id="number"
				name="message_date_time"
				type="text"
				bind:value="{messageDateTime}"
			/>
		</div>
		<div class="flex justify-center py-2">
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline py-4 px-8"
				type="submit"
				form="api"
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
				<p class="text-4xl border">{index + 1}</p>
				<div class="flex py-2">
					<p class="font-bold basis-1/2 border">ID</p>
					<p class="basis-1/2 border">{message.id}</p>
				</div>
				<div class="flex py-2">
					<p class="font-bold basis-1/2 border">Name</p>
					<p class="basis-1/2 border">{message.name}</p>
				</div>
				<div class="flex py-2">
					<p class="font-bold basis-1/2 border">Text</p>
					<p class="basis-1/2 border">{message.text}</p>
				</div>
				<div class="flex flex-col border py-2">
					<p class="font-bold">Date & Time</p>
					<div class="flex items-center py-2">
						<p class="basis-1/2 border">MS</p>
						<p class="basis-1/2 border">{message.submitDateTimeJson.ms}</p>
					</div>
					<div class="flex items-center py-2">
						<p class="basis-1/2 border">ISO</p>
						<p class="basis-1/2 border">{message.submitDateTimeJson.iso}</p>
					</div>
					<div class="flex items-center py-2">
						<p class="basis-1/2 border">UTC</p>
						<p class="basis-1/2 border">{message.submitDateTimeJson.utc}</p>
					</div>
					<div class="flex items-center py-2">
						<p class="basis-1/2 border">DATE</p>
						<p class="basis-1/2 border">{message.submitDateTimeJson.date}</p>
					</div>
					<div class="flex items-center py-2">
						<p class="basis-1/2 border">JSON</p>
						<p class="basis-1/2 border">{message.submitDateTimeJson.json}</p>
					</div>
					<div class="flex items-center py-2">
						<p class="basis-1/2 border">TIME</p>
						<p class="basis-1/2 border">{message.submitDateTimeJson.time}</p>
					</div>
					<div class="flex items-center py-2">
						<p class="basis-1/2 border">STRING</p>
						<p class="basis-1/2 border">
							{message.submitDateTimeJson.string}
						</p>
					</div>
				</div>
				<hr />
			</div>
		{/each}
	</div>
{/if}
