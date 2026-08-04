import type { SvelteComponent } from 'svelte';

export interface ProjectMetadata {
  title: string;
  date: string;
  description: string;
  published: boolean;
  url?: string;
  github?: string;
  tech?: string[];
}

export interface Project {
  slug: string;
  metadata: ProjectMetadata;
}

export interface MarkdownModule {
  default: typeof SvelteComponent;
  metadata: ProjectMetadata;
}