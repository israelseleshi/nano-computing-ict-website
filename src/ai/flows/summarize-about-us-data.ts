'use server';
/**
 * @fileOverview Summarizes the About Us data from Nano Computing ICT Solutions' website.
 *
 * - summarizeAboutUs - A function that summarizes the About Us section content.
 * - SummarizeAboutUsInput - The input type for the summarizeAboutUs function.
 * - SummarizeAboutUsOutput - The return type for the summarizeAboutUs function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAboutUsInputSchema = z.object({
  aboutUsContent: z
    .string()
    .describe('The content of the About Us section of the website.'),
});
export type SummarizeAboutUsInput = z.infer<typeof SummarizeAboutUsInputSchema>;

const SummarizeAboutUsOutputSchema = z.object({
  summary: z
    .string()
    .describe('A summary of the About Us section content.'),
  keyInsights: z
    .string()
    .describe('Key insights extracted from the About Us section.'),
});
export type SummarizeAboutUsOutput = z.infer<typeof SummarizeAboutUsOutputSchema>;

export async function summarizeAboutUs(input: SummarizeAboutUsInput): Promise<SummarizeAboutUsOutput> {
  return summarizeAboutUsFlow(input);
}

const summarizeAboutUsPrompt = ai.definePrompt({
  name: 'summarizeAboutUsPrompt',
  input: {schema: SummarizeAboutUsInputSchema},
  output: {schema: SummarizeAboutUsOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing the About Us section of a company website.

  Please provide a concise summary of the content and extract key insights that would be valuable to a potential customer.

  About Us Content: {{{aboutUsContent}}}
  Summary:
  Key Insights:
  `,
});

const summarizeAboutUsFlow = ai.defineFlow(
  {
    name: 'summarizeAboutUsFlow',
    inputSchema: SummarizeAboutUsInputSchema,
    outputSchema: SummarizeAboutUsOutputSchema,
  },
  async input => {
    const {output} = await summarizeAboutUsPrompt(input);
    return output!;
  }
);
