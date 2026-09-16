import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const experienceCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
	schema: z.object({
		title: z.string(),
		company: z.string(),
		startDate: z.string(),
		endDate: z.string().default('Present'),
		order: z.number(),
	}),
});

const projectsCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		url: z.string().url().optional(),
		tags: z.array(z.string()),
		order: z.number(),
	}),
});

export const collections = {
	experience: experienceCollection,
	projects: projectsCollection,
};
