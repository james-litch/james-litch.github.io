import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { MarkdownModule } from '$lib/types';

export const load: PageLoad = async ({ params }) => {
  const modules = import.meta.glob<MarkdownModule>('/src/lib/data/projects/*.md');
  const path = `/src/lib/data/projects/${params.slug}.md`;

  const resolver = modules[path];

  if (!resolver) throw error(404, 'Project not found');

  const project = await resolver();

  if (!project.metadata.published) throw error(404, 'Project not found');

  return { content: project.default, metadata: project.metadata };
};
