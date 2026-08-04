<script>
  import IconBriefcase from '$lib/assets/icons/briefcase.svg?component';
  import IconSchool from '$lib/assets/icons/school.svg?component';

  import { education, tools, work } from '$lib/data/me';
</script>

<h1 class='accented text-fluid-2xl font-bold mb-6'>Resume</h1>

<div class='switcher gap-y-6 mb-6'>
  <section>
    <h2 class='text-fluid-lg font-bold flex gap-3 items-center mb-6'>
      <IconBriefcase class='text-accent-1' width="1.25em" height="1.25em" />
      Work Experience
    </h2>

    <div class='ml-3'>
      {#each work as {title, dates, description}, index (index)}
        <div class='space-y-1 pl-4 pb-6 border-l border-surface-4 last:border-none last:pb-0 max-w-80'>
          <h3 class='with-marker relative leading-none font-bold'>{title}</h3>
          <p class='text-fluid-xs text-text-tertiary font-medium'>{dates}</p>
          <p class='text-fluid-sm'>{description}</p>
        </div>
      {/each}
    </div>
  </section>

  <section>
    <h2 class='text-fluid-lg font-bold flex gap-3 items-center mb-6'>
      <IconSchool class='text-accent-1' width="1.25em" height="1.25em" />
      Education
    </h2>

    <div class='ml-3'>
      {#each education as {title, dates, description}, index (index)}
        <div class='space-y-1 pl-4 pb-6 border-l border-surface-4 last:border-none last:pb-0 max-w-80'>
          <h3 class='with-marker relative leading-none font-bold'>{title}</h3>
          <p class='text-fluid-xs text-text-tertiary font-medium'>{dates}</p>
          <p class='text-fluid-sm'>{description}</p>
        </div>
      {/each}
    </div>
  </section>
</div>

<section>
  <h2 class='text-fluid-lg font-bold mb-6'>My Skills</h2>

  <div class='bg-surface-2 p-4 flex gap-x-3 gap-y-2 rounded-xl flex-wrap justify-center'>
    {#each tools as {name, Icon}, index (index) }
      <div class='bg-accent-1 rounded-lg px-3 py-2 text-white text-fluid-sm flex items-center gap-1.5'>
        <Icon width="1.25em" height="1.25em" /> {name}
      </div>
    {/each}
  </div>
</section>

<style>
  .with-marker {
    --dot-size: 0.625rem;

    &::before {
      content: '';
      position: absolute;
      width: var(--dot-size);
      height: var(--dot-size);
      border-radius: var(--radius-full);
      background-color: var(--color-accent-1);

      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent-2) 40%, transparent);
      left: -1rem; /* matches parent pl-4 */
      top: 50%;
      translate: -50% -50%;
    }
  }
</style>
