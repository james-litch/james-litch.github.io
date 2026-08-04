<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import IconSun from '$lib/assets/icons/sun.svg?component';
	import IconMoon from '$lib/assets/icons/moon.svg?component';
	import {
		STORAGE_KEY,
		applyColorScheme,
		getStoredPreference,
		readAppliedScheme,
		type ColorScheme
	} from '$lib/color-scheme';

	const pages = [
		{ name: 'Home', path: resolve('/') },
		{ name: 'Resume', path: resolve('/resume') },
		{ name: 'Projects', path: resolve('/projects') }
	];

	let darkMode = $state(readAppliedScheme() === 'dark');
	let userHasChosen = $state(getStoredPreference() !== null);

	$effect(() => {
		const scheme: ColorScheme = darkMode ? 'dark' : 'light';
		applyColorScheme(scheme);
		if (userHasChosen) localStorage.setItem(STORAGE_KEY, scheme);
	});

	onMount(() => {
		const media = matchMedia('(prefers-color-scheme: dark)');

		const syncWithSystem = (event: MediaQueryListEvent) => {
			if (getStoredPreference()) return;
			darkMode = event.matches;
		};

		media.addEventListener('change', syncWithSystem);
		return () => media.removeEventListener('change', syncWithSystem);
	});

	function toggleColorScheme() {
		userHasChosen = true;
		darkMode = !darkMode;
	}
</script>

<nav class='max-sm:hidden my-4'>
	<ul class='flex gap-2 items-center justify-end text-fluid-3'>
		{#each pages as { name, path } (name)}
			{@const selected = page.url.pathname === path}
			<li>
				<a class='{selected ? 'button-primary' : 'button'}' aria-current={selected} href={path}
					>{name}</a
				>
			</li>
		{/each}

		<li>
			<button class='button' type='button' onclick={toggleColorScheme}>
				{#if darkMode}
          <IconSun />
          <span class='sr-only'>Switch to light mode</span>
				{:else}
          <IconMoon />
          <span class='sr-only'>Switch to dark mode</span>
				{/if}
			</button>
		</li>
	</ul>
</nav>
