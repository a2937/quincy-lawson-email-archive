// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)

const newsletterCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    date: z
      .date()
      .or(z.string())
      .transform((val) => new Date(val)),
    links: z.array(
      z.object({
        description: z.string(),
        link: z.string(),
        order: z
          .string()
          .or(z.number())
          .transform((val) => val.toString()),
        time_duration: z
          .string()
          .or(z.number())
          .transform((val) => val.toString()),
        time_type: z.string(),
      })
    ),
    bonus: z.string().optional(),
    quote: z.string().optional(),
    quote_author: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  newsletter: newsletterCollection,
};
