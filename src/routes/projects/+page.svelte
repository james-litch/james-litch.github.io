<script>
	import { resolve } from "$app/paths";
	import Seo from "$components/seo.svelte";

  let { data } = $props();
</script>

<Seo title='Projects' />

<h1 class="accented text-fluid-2xl font-bold mb-6">Projects</h1>

<div class="grid sm:grid-cols-2 gap-4">
  {#each data.projects as { slug, metadata } (slug)}
    <article class='relative bg-surface-2 rounded-xl hover:shadow transition p-4'>
      <h2 class='text-fluid-sm font-semibold mb-1'>
        <a href={resolve("/projects/[slug]", { slug })} class="after:absolute after:inset-0 after:size-full hover:underline">
          {metadata.title}
        </a>
      </h2>

      <p class='text-fluid-xs mb-4'>{metadata.description}</p>

      <div class="flex flex-wrap gap-1 empty:hidden">
        {#each metadata.tech?.slice(0,3) as tech (tech) }
          <span class="text-fluid-xs bg-accent-1 text-white rounded-sm px-1 py-0.5">{tech}</span>
        {/each}
      </div>
    </article>
  {/each}
</div>
