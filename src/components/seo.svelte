<script>
	import { me } from "$lib/data/me";
  import emoji from '$lib/assets/images/memoji.webp';

  let {
    suffix = me.name,
    title = '',
    description= 'Product engineer James Litchfield builds performant web and mobile products — from healthcare marketplaces to native iOS apps.',
    url = me.website,
    image = emoji,
    type = 'website'
  } = $props();

  let fullTitle = $derived([title, suffix].join(' | '))
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={url} />

  <!-- Open Graph -->
  <meta property="og:type" content={type} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />
  <meta property="og:site_name" content={url} />
  <meta property="og:image" content={image} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
</svelte:head>