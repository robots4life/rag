<script>
	import { fly } from 'svelte/transition';
	export let url = '';

	// https://flaviocopes.com/css-how-to-stick-bottom-flexbox/
	// make the transitioning div element grow to the bottom of the page so that there are no jumps in the layout during the transition
</script>

{#key url}
	<div
		class="flex-grow"
		in:fly="{{ x: -16, duration: 200, delay: 220 }}"
		out:fly="{{ x: 16, duration: 200 }}"
	>
		<slot />
	</div>
{/key}
