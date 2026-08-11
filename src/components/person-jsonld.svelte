<script>
	import { me } from "$lib/data/me";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": me.name,
    "jobTitle": me.role,
    "description": 'Liverpool-based developer building for web and mobile.',
    "url": me.website,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": [me.city, me.country].join(', '),
    },
    "sameAs": [
      me.github,
      me.linkedin,
    ]
  };
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>