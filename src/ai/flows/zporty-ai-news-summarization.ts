'use server';
/**
 * @fileOverview This file implements a Genkit flow for Zporty AI to summarize today's sports news.
 *
 * - zportyAINewsSummarization - An async function that summarizes sports news based on a query.
 * - ZportyAINewsSummarizationInput - The input type for the summarization function.
 * - ZportyAINewsSummarizationOutput - The return type for the summarization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * Defines the input schema for the Zporty AI news summarization flow.
 */
const ZportyAINewsSummarizationInputSchema = z.object({
  query: z.string().describe("The user's request for sports news summarization, e.g., 'Summarize today's sports news' or 'What's new in NBA?'."),
});
export type ZportyAINewsSummarizationInput = z.infer<typeof ZportyAINewsSummarizationInputSchema>;

/**
 * Defines the output schema for the Zporty AI news summarization flow.
 */
const ZportyAINewsSummarizationOutputSchema = z.string().describe('A concise and intelligent summary of today\u0027s sports news.');
export type ZportyAINewsSummarizationOutput = z.infer<typeof ZportyAINewsSummarizationOutputSchema>;

/**
 * Wraps the Zporty AI news summarization flow to provide a simple, exported function interface.
 *
 * @param input - The input containing the user's query for news summarization.
 * @returns A promise that resolves to a string containing the summarized sports news.
 */
export async function zportyAINewsSummarization(
  input: ZportyAINewsSummarizationInput
): Promise<ZportyAINewsSummarizationOutput> {
  return zportyAINewsSummarizationFlow(input);
}

/**
 * Defines the prompt for the Zporty AI news summarization.
 * It acts as a sports news summarizer, focusing on major headlines across various sports.
 */
const zportyAINewsSummarizationPrompt = ai.definePrompt({
  name: 'zportyAINewsSummarizationPrompt',
  input: {schema: ZportyAINewsSummarizationInputSchema},
  output: {schema: ZportyAINewsSummarizationOutputSchema},
  prompt: `You are a sports news summarizer for Sport.co, the ultimate sports platform.
Summarize today's sports news, focusing on major headlines and key developments across NBA, NFL, MLB, NHL, Soccer (Premier League, Champions League, MLS, World Cup), Tennis, UFC/MMA, Formula 1, and NCAA Sports.
Make the summary concise, intelligent, conversational, and easy to understand, similar to what you would find on ESPN or Bleacher Report.
Today's date is {{{currentDate}}}.
The user's specific request is: "{{{query}}}"`,
});

/**
 * Defines the Genkit flow for Zporty AI news summarization.
 * It fetches the current date and passes it along with the user's query to the prompt.
 */
const zportyAINewsSummarizationFlow = ai.defineFlow(
  {
    name: 'zportyAINewsSummarizationFlow',
    inputSchema: ZportyAINewsSummarizationInputSchema,
    outputSchema: ZportyAINewsSummarizationOutputSchema,
  },
  async (input) => {
    // Get the current date to ensure the summary is relevant to 'today's' news.
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const {output} = await zportyAINewsSummarizationPrompt({...input, currentDate});
    return output!;
  }
);
