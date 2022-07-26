<script>
	export let bandMembers;
</script>

<h1>Band Members</h1>

{JSON.stringify(bandMembers, null, 2)}

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
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">Instrument</p>
				<p class="basis-1/2 border">{member.instrument[0]}</p>
				{#if member.instrument[1]}
					<p class="basis-1/2 border">{member.instrument[1]}</p>
				{/if}
			</div>
			<div class="flex py-2">
				<p class="basis-1/2 border">Picture</p>
				<img class="basis-1/2 border" src="{member.picture.url}" alt="" />
			</div>
		{/each}
	</div>
{/if}
