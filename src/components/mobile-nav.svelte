<script lang="ts">
  import IconSun from '$lib/assets/icons/sun.svg?component';
	import IconMoon from '$lib/assets/icons/moon.svg?component';
	import IconClose from '$lib/assets/icons/x.svg?component';
	import { colorSchemeState, toggleColorScheme } from '$lib/color-scheme.svelte';
	import { pages } from '$lib/data/pages';
	import { page } from '$app/state';

  let popover: HTMLElement;

  function handleLinkClick() {
    popover?.hidePopover();
  }
</script>

<div bind:this={popover} id='mobile-menu' class='h-full w-full bg-surface-1 px-8 mx-auto py-4' popover>
  <div class='flex items-center justify-between mb-10'>
    <button class='button-secondary icon-button rounded-full' type='button' onclick={toggleColorScheme}>
      {#if colorSchemeState.darkMode}
        <IconSun width='1.5em' height='1.5em'/>
        <span class='sr-only'>Switch to light mode</span>
      {:else}
        <IconMoon width='1.5em' height='1.5em'/>
        <span class='sr-only'>Switch to dark mode</span>
      {/if}
    </button>

    <button class='button-primary icon-button rounded-full' type='button' popovertarget="mobile-menu" popovertargetaction="hide">
      <span class="sr-only">close menu</span>
      <IconClose width='1.5em' height='1.5em'/>
    </button>
  </div>

  <menu>
    {#each pages as { name, path } (name)}
      {@const selected = page.url.pathname === path}
      <li>
        <a class='button-secodary w-full text-fluid-lg {selected && 'text-accent-1'}' onclick={handleLinkClick} aria-current={selected} href={path}>{name}</a>
      </li>
    {/each}
  </menu>
</div>
