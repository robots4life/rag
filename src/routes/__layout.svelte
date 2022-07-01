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
</script>

<main class="container border">
	<Nav />
	<PageTransition url="{url}">
		<!-- Everything inside this transition component will be animated! -->
		<!-- In this example, that encompasses all the page contents besides the navbar. -->
		<slot />
		<Footer />
	</PageTransition>
</main>

<style>
	:global(html) {
		overflow-y: scroll;
	}
</style>
