<script lang="ts">

	import { page } from '$app/state';
	import IconSun from '$lib/assets/icons/sun.svg?component';
	import IconMoon from '$lib/assets/icons/moon.svg?component';
	import { colorSchemeState, toggleColorScheme } from '$lib/color-scheme.svelte';
	import { pages } from '$lib/data/pages';
</script>

<nav class='max-sm:hidden my-4' aria-label="Main">
	<menu class='flex gap-2 items-center justify-end text-fluid-3'>
		{#each pages as { name, path } (name)}
			{@const selected = page.url.pathname === path}
			<li>
				<a class='{selected ? 'button-primary' : 'button'}' aria-current={selected} href={path}>{name}</a>
			</li>
		{/each}

		<li>
			<button class='button' type='button' onclick={toggleColorScheme}>
				{#if colorSchemeState.darkMode}
          <IconSun />
          <span class='sr-only'>Switch to light mode</span>
				{:else}
          <IconMoon />
          <span class='sr-only'>Switch to dark mode</span>
				{/if}
			</button>
		</li>
	</menu>
</nav>
