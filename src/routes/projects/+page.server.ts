import type { Project, MarkdownModule } from '$lib/types';

export const load = async () => {
  const modules = import.meta.glob<MarkdownModule>('/src/lib/data/projects/*.md');

  const projects: (Project | undefined)[] = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const project = await resolver();
      const slug = path.split('/').pop()?.replace('.md', '') ?? '';

      if (!project.metadata.published) return;

      return {
        slug,
        metadata: project.metadata,
      };
    })
  );

  const filteredProjects: Project[] = projects.filter(p => !!p)

  const sortedProjects = filteredProjects.sort(
    (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );

  return { projects: sortedProjects };
};