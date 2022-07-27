<script context="module">
	export const hydrate = false;
	export const prerender = true;
</script>

<script>
	export const API_URL = process.env['JSON_PLACEHOLDER_ENDPOINT'];
	console.log(API_URL);
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
