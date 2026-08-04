<script lang="ts">
	import { resolve } from '$app/paths';
  import IconArrowLeft from '$lib/assets/icons/arrow-left.svg?component';
  import IconGitHub from '$lib/assets/icons/github.svg?component';
  import IconExternal from '$lib/assets/icons/external.svg?component';

  let { data } = $props();
  let github = $derived(data.metadata.github);
  let url = $derived(data.metadata.url);
</script>

<div class='flex justify-between gap-x-10 gap-y-4 items-center'>
  <a href={resolve('/projects')} class='flex gap-1 hover:underline items-center text-sm text-text-secondary font-medium'>
    <IconArrowLeft width="1.5em" height="1.5em"/> Back to Projects
  </a>
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


<h1 class='accented text-fluid-2xl font-bold mb-6'>{data.metadata.title}</h1>

<p class='mb-4'>{data.metadata.description}</p>

<div class='prose'>
  <data.content />
</div>
