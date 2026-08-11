<script lang="ts">
	import { resolve } from '$app/paths';
  import IconArrowLeft from '$lib/assets/icons/arrow-left.svg?component';
  import IconGitHub from '$lib/assets/icons/github.svg?component';
  import IconExternal from '$lib/assets/icons/external.svg?component';
	import Seo from '$components/seo.svelte';

  let { data } = $props();
  let github = $derived(data.metadata.github);
  let url = $derived(data.metadata.url);
</script>

<Seo title={data.metadata.title} />

<a href={resolve('/projects')} class='flex gap-1 hover:underline items-center text-sm text-text-secondary font-medium mb-3'>
  <IconArrowLeft width="1.5em" height="1.5em"/> Back to projects
</a>

<h1 class='accented text-fluid-2xl font-bold mb-6'>{data.metadata.title}</h1>

<p class='mb-4'>{data.metadata.description}</p>

{#if data.metadata.tech?.length}
  <section class='space-y-2 mb-4'>
    <h2 class='text-fluid-lg font-bold mb-'>Tech Stack</h2>
    <ul class='flex flex-wrap gap-2 text-fluid-sm font-medium'>
      {#each data.metadata.tech as tool (tool)} 
        <li class='px-2 py-1 bg-surface-2 rounded-md'>{tool}</li>
      {/each}
    </ul>
  </section>
{/if}

{#if url || github}
  <div class="mb-6">
    <h2 class='text-fluid-xl font-bold mb-4'>Links</h2>
    <div class="flex gap-2 flex-wrap">
      {#if url}
        <a href={url} rel='external' class='button-primary text-fluid-xs' target='_blank'>
          <IconExternal width="1em" height="1em"/>
          Live
        </a>
      {/if}

      {#if github}
        <a href={github} rel='external' class='button-secondary text-fluid-xs items-center' target='_blank'>
          <IconGitHub width="1em" height="1em"/>
          GitHub
        </a>
      {/if}
    </div>
  </div>
{/if}


<div class='prose'>
  <data.content />
</div>
