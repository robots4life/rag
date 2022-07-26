<script context="module">
	export const prerender = true;
</script>

<script>
	export let concerts;
</script>

<h1>Concerts</h1>

<!-- {JSON.stringify(concerts, null, 2)} -->

{#if concerts}
	<div class="w-full text-2xl text-center py-8">
		<h2 class="text-6xl">Concerts</h2>
		{#each concerts as concert, index}
			<p class="text-4xl border">{index + 1}</p>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">ID</p>
				<p class="basis-1/2 border">{concert.id}</p>
			</div>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">Date</p>
				<p class="basis-1/2 border">{concert.date}</p>
			</div>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">Title</p>
				<p class="basis-1/2 border">{concert.title}</p>
			</div>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">Slug</p>
				<p class="basis-1/2 border">{concert.slug}</p>
			</div>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">Location Title</p>
				<p class="basis-1/2 border">{concert.locationTitle}</p>
			</div>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">Location Link</p>
				<p class="basis-1/2 border">{concert.locationLink}</p>
			</div>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">Start Date Time</p>
				<p class="basis-1/2 border">{concert.startDateTime}</p>
			</div>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">End Date Time</p>
				<p class="basis-1/2 border">{concert.endDateTime}</p>
			</div>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">Entry Price</p>
				<p class="basis-1/2 border">{concert.entryPrice}</p>
			</div>
			<div class="flex py-2">
				<p class="font-bold basis-1/2 border">Google Map Link</p>
				<a href="{concert.googleMapLink}" class="basis-1/2 border"
					>{concert.googleMapLink}</a
				>
			</div>
			<div class="flex flex-col border py-2">
				<p class="font-bold">Google Map Coordinates</p>
				<div class="flex py-2">
					<p class="basis-1/2 border">Latitude</p>
					<p class="basis-1/2 border">{concert.googleMapCoordinates.latitude}</p>
				</div>
				<div class="flex py-2">
					<p class="basis-1/2 border">Longitude</p>
					<p class="basis-1/2 border">{concert.googleMapCoordinates.longitude}</p>
				</div>
			</div>

			{#if concert.bandMembers}
				<div class="flex flex-col border py-2">
					<p class="font-bold">Band Members</p>
					{#each concert.bandMembers as member}
						<!-- {JSON.stringify(member, null, 2)} -->
						<div class="flex py-2">
							<p class="basis-1/2 border">Name</p>
							<p class="basis-1/2 border">{member.name}</p>
						</div>
						<div class="flex py-2">
							<p class="basis-1/2 border">Nickname</p>
							<p class="basis-1/2 border">{member.nickname}</p>
						</div>
						<div class="flex py-2">
							<p class="basis-1/2 border">Description</p>
							<p class="basis-1/2 border">{member.description}</p>
						</div>
						<div class="flex py-2">
							<p class="basis-1/2 border">Instrument</p>
							<p class="basis-1/2 border">{member.instrument}</p>
						</div>
						<div class="flex py-2">
							<p class="basis-1/2 border">Picture</p>
							<!-- <p class="basis-1/2 border">{member.picture}</p> -->
							<img src="{member.picture.url}" alt="" />
						</div>
					{/each}
				</div>
			{/if}
		{/each}
	</div>
{/if}
