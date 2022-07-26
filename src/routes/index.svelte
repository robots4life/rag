<script>
	export const API_URL = process.env['JSON_PLACEHOLDER_ENDPOINT'];
	console.log(API_URL);
	export let bandMembers;
	import Picture from '$root/components/Picture.svelte';
</script>

<hr />
<h1 class="text-8xl text-center py-4">
	Ragatac Band <br />
	We Play Cool Reggae <br />
	For Everyone
</h1>
<hr />
<!-- <h2 class="text-6xl text-center py-4">Description of Music</h2> -->
<hr />
<div class="cta text-4xl py-4 list-none">
	<ul class="flex py-4 justify-between">
		<li>
			<a href="/music">Listen to our Music</a>
		</li>
		<li>
			<a href="/band">Check out our Band</a>
		</li>
	</ul>
</div>
<hr />

{#if bandMembers}
	<div class="w-full text-2xl text-center py-8">
		<h2 class="text-6xl">Band Members</h2>
		{#each bandMembers as member, index}
			<p class="text-4xl border">{index + 1}</p>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">ID</p>
				<p class="basis-1/2 border">{member.id}</p>
			</div>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">Name</p>
				<p class="basis-1/2 border">{member.name}</p>
			</div>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">Nickname</p>
				<p class="basis-1/2 border">{member.nickname}</p>
			</div>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">Description</p>
				<p class="basis-1/2 border">{member.description}</p>
			</div>
			<div class="flex flex-col border py-2">
				<p class="font-bold">Instrument</p>
				<div class="flex justify-center border py-2">
					<p class="basis-2/5 border">{member.instrument[0]}</p>
					{#if member.instrument[1]}
						<p class="basis-2/5 border">{member.instrument[1]}</p>
					{/if}
				</div>
			</div>
			<div class="flex flex-col border py-2">
				<p class="font-bold">Picture</p>
				<div class="flex flex-col items-center border py-2">
					<!-- {member.picture} -->
					<!-- {JSON.stringify(member.picture, null, 2)} -->
					<!-- <Image url="{member.picture.url}" /> -->
					<!-- <Picture data="{member.picture}" class="basis-1/2 border" /> -->
				</div>
			</div>
			<div class="flex flex-col border py-2">
				<p class="font-bold">Picture</p>
				<div class="flex flex-col items-center border py-2">
					<!-- {member.picture} -->
					<!-- {JSON.stringify(member.picture, null, 2)} -->
					<p class="basis-1/2 border">{JSON.stringify(member.picture, null, 2)}</p>
					<Picture member="{member}" classes="{'border-8 border-red-800'}" />
				</div>
			</div>
		{/each}
	</div>
{/if}
