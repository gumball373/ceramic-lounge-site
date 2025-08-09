import { defineCollection, z } from 'astro:content';

const product = defineCollection({
    type: 'content', // 'content' for Markdown/MDX, 'data' for JSON/YAML
    schema: z.object({
        product: z.string(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        img1: z.string(),
        img2: z.string(),
        img3: z.string(),
        altLabel: z.string(),
        priceID: z.string(),
        fillColor: z.string()
        // Add other frontmatter properties as needed
    }),
});

export const collections = {
    product,
};