'use server';

/**
 * @fileOverview An AI agent that categorizes contact form inquiries and provides immediate responses.
 *
 * - categorizeInquiry - A function that categorizes the inquiry and provides a response.
 * - CategorizeInquiryInput - The input type for the categorizeInquiry function.
 * - CategorizeInquiryOutput - The return type for the categorizeInquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeInquiryInputSchema = z.object({
  message: z.string().describe('The user message from the contact form.'),
});
export type CategorizeInquiryInput = z.infer<typeof CategorizeInquiryInputSchema>;

const CategorizeInquiryOutputSchema = z.object({
  category: z.string().describe('The category of the inquiry.'),
  response: z.string().describe('An immediate, helpful response to the inquiry.'),
});
export type CategorizeInquiryOutput = z.infer<typeof CategorizeInquiryOutputSchema>;

export async function categorizeInquiry(input: CategorizeInquiryInput): Promise<CategorizeInquiryOutput> {
  return categorizeInquiryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categorizeInquiryPrompt',
  input: {schema: CategorizeInquiryInputSchema},
  output: {schema: CategorizeInquiryOutputSchema},
  prompt: `You are an AI assistant that categorizes contact form inquiries and provides an immediate, helpful response.

  Analyze the following message and determine its category. Also, provide a helpful response based on the message.

  Message: {{{message}}}

  Ensure that the response is concise and helpful.
  `,
});

const categorizeInquiryFlow = ai.defineFlow(
  {
    name: 'categorizeInquiryFlow',
    inputSchema: CategorizeInquiryInputSchema,
    outputSchema: CategorizeInquiryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
