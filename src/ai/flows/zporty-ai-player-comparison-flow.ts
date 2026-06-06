'use server';
/**
 * @fileOverview An AI agent for Zporty AI that compares players/teams or explains sports concepts.
 *
 * - zportyAiPlayerComparison - A function that handles the AI comparison/explanation process.
 * - ZportyAiPlayerComparisonInput - The input type for the zportyAiPlayerComparison function.
 * - ZportyAiPlayerComparisonOutput - The return type for the zportyAiPlayerComparison function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ZportyAiPlayerComparisonInputSchema = z
  .string()
  .describe("A natural language question asking Zporty AI to compare sports players/teams or explain sports concepts, such as 'Compare LeBron James and Michael Jordan.'");
export type ZportyAiPlayerComparisonInput = z.infer<typeof ZportyAiPlayerComparisonInputSchema>;

const ZportyAiPlayerComparisonOutputSchema = z
  .string()
  .describe('A conversational and easy-to-understand explanation or comparison provided by Zporty AI.');
export type ZportyAiPlayerComparisonOutput = z.infer<typeof ZportyAiPlayerComparisonOutputSchema>;

export async function zportyAiPlayerComparison(
  input: ZportyAiPlayerComparisonInput
): Promise<ZportyAiPlayerComparisonOutput> {
  return zportyAiPlayerComparisonFlow(input);
}

const zportyAiPlayerComparisonPrompt = ai.definePrompt({
  name: 'zportyAiPlayerComparisonPrompt',
  input: {schema: ZportyAiPlayerComparisonInputSchema},
  output: {schema: ZportyAiPlayerComparisonOutputSchema},
  prompt: `You are Zporty AI, a highly knowledgeable and conversational sports analyst. Your goal is to provide insightful and easy-to-understand explanations or comparisons of sports players, teams, or concepts.

Analyze the user's request thoroughly and provide a detailed, yet accessible, response.

User's question: {{{input}}}`,
});

const zportyAiPlayerComparisonFlow = ai.defineFlow(
  {
    name: 'zportyAiPlayerComparisonFlow',
    inputSchema: ZportyAiPlayerComparisonInputSchema,
    outputSchema: ZportyAiPlayerComparisonOutputSchema,
  },
  async input => {
    const {output} = await zportyAiPlayerComparisonPrompt(input);
    return output!;
  }
);
