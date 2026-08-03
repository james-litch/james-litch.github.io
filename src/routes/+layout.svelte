<script lang="ts">
	import '../styles/app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>


<header>

</header>

<div class="rounded-xl bg-black">
	<main>
	
	</main>
</div>

{@render children()}
