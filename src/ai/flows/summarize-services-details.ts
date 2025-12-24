'use server';

/**
 * @fileOverview Summarizes the details and insights of Nano Computing ICT Solutions' services using GenAI.
 *
 * - summarizeServicesDetails - A function that summarizes the services details.
 * - SummarizeServicesDetailsInput - The input type for the summarizeServicesDetails function.
 * - SummarizeServicesDetailsOutput - The return type for the summarizeServicesDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeServicesDetailsInputSchema = z.object({
  servicesDetails: z
    .string()
    .describe("The detailed text content of Nano Computing ICT Solutions' services."),
});
export type SummarizeServicesDetailsInput = z.infer<
  typeof SummarizeServicesDetailsInputSchema
>;

const SummarizeServicesDetailsOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the services details, highlighting key insights.'
    ),
});
export type SummarizeServicesDetailsOutput = z.infer<
  typeof SummarizeServicesDetailsOutputSchema
>;

export async function summarizeServicesDetails(
  input: SummarizeServicesDetailsInput
): Promise<SummarizeServicesDetailsOutput> {
  return summarizeServicesDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeServicesDetailsPrompt',
  input: {schema: SummarizeServicesDetailsInputSchema},
  output: {schema: SummarizeServicesDetailsOutputSchema},
  prompt: `Summarize the following details about Nano Computing ICT Solutions' services:

{{{servicesDetails}}}

Provide a concise summary that highlights the key offerings and insights.
`,
});

const summarizeServicesDetailsFlow = ai.defineFlow(
  {
    name: 'summarizeServicesDetailsFlow',
    inputSchema: SummarizeServicesDetailsInputSchema,
    outputSchema: SummarizeServicesDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
