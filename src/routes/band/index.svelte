<script context="module">
	export const prerender = true;
</script>

<script>
	export let bandMembers;
	import Image from '$root/components/Image.svelte';
	import Picture from '$root/components/Picture.svelte';
</script>

<h1>Band Members</h1>

<!-- {JSON.stringify(bandMembers, null, 2)} -->

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
