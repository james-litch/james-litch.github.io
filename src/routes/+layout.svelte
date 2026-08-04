<script lang="ts">
	import '../styles/app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$components/sidebar.svelte';
	import Nav from '$components/nav.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class='max-w-6xl px-10 mx-auto py-4'>
	<header>
		<Nav />
	</header>
	
	<div class="rounded-xl flex gap-6 sidebar-l flex-wrap-reverse bg-surface-3 p-6">
		<Sidebar />
		<main>
			{@render children()}
		</main>
	</div>
</div>
