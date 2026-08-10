<script lang="ts">
	import '../styles/app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$components/sidebar.svelte';
	import Nav from '$components/nav.svelte';
	import IconMenu from '$lib/assets/icons/menu.svg?component';
	import MobileNav from '$components/mobile-nav.svelte';
	import { applyColorScheme, colorSchemeState, getStoredPreference, STORAGE_KEY, type ColorScheme } from '$lib/color-scheme.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	$effect(() => {
		const scheme: ColorScheme = colorSchemeState.darkMode ? 'dark' : 'light';
		applyColorScheme(scheme);
		if (colorSchemeState.userHasChosen) localStorage.setItem(STORAGE_KEY, scheme);
	});

	onMount(() => {
		const media = matchMedia('(prefers-color-scheme: dark)');

		const syncWithSystem = (event: MediaQueryListEvent) => {
			if (getStoredPreference()) return;
			colorSchemeState.darkMode = event.matches;
		};

		media.addEventListener('change', syncWithSystem);
		return () => media.removeEventListener('change', syncWithSystem);
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<MobileNav />

<div class='max-w-6xl px-10 mx-auto py-6'>
	<header>
		<Nav />
	</header>
	
	<div class="rounded-xl flex gap-6 sidebar-l flex-wrap-reverse bg-surface-3 p-6">
		<Sidebar />
		<main class="relative">
			<button type='button' popovertarget="mobile-menu" class='button-primary rounded-full icon-button absolute -top-8 -right-8 z-10 sm:hidden'>
				<span class="sr-only">Menu</span>
				<IconMenu height="1.5em" width="1.5em" />
			</button>
			{@render children()}
		</main>
	</div>
</div>
