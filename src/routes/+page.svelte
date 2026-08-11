<script>
  import IconDeviceMobile from '$lib/assets/icons/device-mobile.svg?component';
  import IconServer from '$lib/assets/icons/server.svg?component';
  import IconmWebsite from '$lib/assets/icons/website.svg?component';
  import IconmListSearch from '$lib/assets/icons/list-search.svg?component';
	import Seo from '$components/seo.svelte';

  const workTopics = [
    { title: "Mobile Development", Icon: IconDeviceMobile, description: "Professional development of native and cross-platform applications." },
    { title: "Web Development", Icon: IconmWebsite, description: "High-quality development of professional looking websites." },
    { title: "API Development", Icon: IconServer, description: "Creating easy to use REST and GraphQL API's." },
    { title: "SEO Optimisation", Icon: IconmListSearch, description: "Improving search engine optimisation, to make content easier to find." },
  ]
</script>

<Seo title='About me' />

<h1 class='accented text-fluid-2xl font-bold'>About me</h1>

<div class='my-4 space-y-2'>
  <p>I'm a software engineer from Liverpool, England, working in mobile and web development. I enjoy taking ideas and turning them into beautiful and responsive apps.</p>
  <p>My job is to build responsive applications that are both eye catching and user-friendly. I'm also a team orientated and friendly individual, with knowledge in a vast amount of fields, always willing to learn and try new things to the best of my ability.</p>
</div>
 
<h2 class='text-fluid-lg mb-2 font-bold'>What I enjoy doing</h2>

<div class='grid sm:grid-cols-2 gap-4'>
  {#each workTopics as { title, Icon, description}, index (index)}
    <div class='flex gap-4 rounded-xl p-4 bg-surface-2 shadow text-fluid-md'>
      <Icon width="1.5em" height="1.5em" class='shrink-0 text-accent-1' />
      <div class='space-y-2'>
        <h3 class='font-semibold'>{title}</h3>
        <p class="text-fluid-sm">{description}</p>
      </div>
    </div>
  {/each}
</div>
