<!-- src/lib/components/ProjectJsonLd.svelte -->
<script lang="ts">
	import { me } from "$lib/data/me";
	import type { ProjectMetadata } from "$lib/types";

  type Props = ProjectMetadata & { slug: string}

  let {title, url, slug, github, description,tech}: Props = $props()

  const jsonLd = $derived({
    "@context": "https://schema.org",
    "@type": url ? "SoftwareApplication" : "CreativeWork",
    "name": title,
    "description": description,
    "url": url ?? `https://litchfield.dev/projects/${slug}`,
    "creator": {
      "@type": "Person",
      "name": me.name
    },
    "keywords": (tech || []).join(', '),
    ...(github && { "codeRepository": github })
  });
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>