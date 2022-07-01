<script>
	import { fly } from 'svelte/transition';
	export let url = '';
</script>

{#key url}
	<div in:fly="{{ x: -16, duration: 200, delay: 220 }}" out:fly="{{ x: 16, duration: 200 }}">
		<slot />
	</div>
{/key}
