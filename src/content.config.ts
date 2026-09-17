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

const blogCollection = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		categories: z.array(z.string()),
		tags: z.array(z.string()).optional(),
		draft: z.boolean().default(false),
	}),
});

const resumeCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/resume' }),
	schema: z.object({
		type: z.enum(['basics', 'summary', 'skills', 'education']).optional(),
		name: z.string().optional(),
		role: z.string().optional(),
		email: z.string().optional(),
		phone: z.string().optional(),
		location: z.string().optional(),
		links: z.record(z.string()).optional(),
		categories: z.record(z.array(z.string())).optional(),
		degree: z.string().optional(),
		university: z.string().optional(),
		year: z.string().optional(),
		cgpa: z.string().optional(),
	}).passthrough(),
});

export const collections = {
	experience: experienceCollection,
	projects: projectsCollection,
	blog: blogCollection,
	resume: resumeCollection,
};
