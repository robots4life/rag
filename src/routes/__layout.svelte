<script context="module">
	export async function load({ url }) {
		// console.log(url);
		return {
			props: { url }
		};
	}
</script>

<script>
	import '../app.css';

	import Nav from '$root/components/Nav.svelte';
	import PageTransition from '$root/components/PageTransition.svelte';
	import Footer from '$root/components/Footer.svelte';

	export let url;
	// https://flaviocopes.com/css-how-to-stick-bottom-flexbox/
	// set the minimum height of the main container to the screen height so that there are no jumps in the layout during the transition
</script>

<main class="container border min-h-screen flex flex-col">
	<Nav />
	<hr />
	<PageTransition url="{url}">
		<!-- Everything inside this transition component will be animated! -->
		<!-- In this example, that encompasses all the page contents besides the navbar. -->
		<slot />
	</PageTransition>
	<Footer />
</main>

<style>
	:global(html) {
		overflow-y: scroll;
		background-color: slateblue;
		color: white;
		word-wrap: wrap;
	}
</style>
