<script>
  import IconDownload from '$lib/assets/icons/download.svg?component';
  import IconGithub from '$lib/assets/icons/github.svg?component';
  import IconLinkedin from '$lib/assets/icons/linkedin.svg?component';
  import IconMail from '$lib/assets/icons/mail.svg?component';
  import IconPhone from '$lib/assets/icons/phone.svg?component';
  import IconPin from '$lib/assets/icons/pin.svg?component';
  import emoji from '$lib/assets/images/memoji.webp';
  import { me } from '$lib/data/me';
</script>

<aside>
  <div class='sticky top-6 bg-surface-2 flex flex-col gap-2 items-center p-6 rounded-2xl'>
    <img src={emoji} alt="Emoji self portrait" class='mb-4 max-w-48'>
    <h2 class='text-fluid-xl font-semibold'>James Litchfield</h2>

    <span class='uppercase rounded-full px-2 py-1 bg-surface-4 text-fluid-sm font-semibold'>Product Engineer</span>

    <div class='my-4 space-y-1 text-text-secondary text-fluid-sm'>
      <div class='flex gap-1 items-center'>
        <IconPhone class='text-accent-1' width="1.25em" height="1.25em" />
        <a href="tel:{me.phone}">{me.phone}</a>
      </div>
      
      <div class='flex gap-1 items-center'>
        <IconPin class='text-accent-1' width="1.25em" height="1.25em" />
        {me.city}, {me.country}
      </div>
      
      <div class='flex gap-1 items-center'>
        <IconMail class='text-accent-1' width="1.25em" height="1.25em" />
        <a href="mailto:{me.email}">{me.email}</a>
      </div>
      
      <div class='flex gap-1 items-center'>
        <IconGithub class='text-accent-1' width="1.25em" height="1.25em" />
        <a href={me.github} rel='external'>GitHub</a>
      </div>
      
      <div class='flex gap-1 items-center'>
        <IconLinkedin class='text-accent-1' width="1.25em" height="1.25em" />
        <a href={me.linkedin} rel='external'>LinkedIn</a>
      </div>
    </div>

    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
    <a href="/resume.pdf" class='button-primary w-full gap-1'>
      <IconDownload />
      Download CV
    </a>
  </div>
</aside>
