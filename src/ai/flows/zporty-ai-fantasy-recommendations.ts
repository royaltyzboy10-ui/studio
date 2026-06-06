'use server';
/**
 * @fileOverview This file implements a Genkit flow for Zporty AI to provide fantasy sports recommendations.
 *
 * - zportyAIFantasyRecommendations - A function that handles fantasy sports recommendation requests.
 * - ZportyAIFantasyRecommendationsInput - The input type for the zportyAIFantasyRecommendations function.
 * - ZportyAIFantasyRecommendationsOutput - The return type for the zportyAIFantasyRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ZportyAIFantasyRecommendationsInputSchema = z
  .string()
  .describe(
    'A natural language question from a fantasy sports player asking for player recommendations, draft assistance, or waiver wire suggestions.'
  );
export type ZportyAIFantasyRecommendationsInput = z.infer<
  typeof ZportyAIFantasyRecommendationsInputSchema
>;

const ZportyAIFantasyRecommendationsOutputSchema = z
  .string()
  .describe('The AI-generated fantasy sports recommendations or assistance.');
export type ZportyAIFantasyRecommendationsOutput = z.infer<
  typeof ZportyAIFantasyRecommendationsOutputSchema
>;

export async function zportyAIFantasyRecommendations(
  input: ZportyAIFantasyRecommendationsInput
): Promise<ZportyAIFantasyRecommendationsOutput> {
  return zportyAIFantasyRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'zportyAIFantasyRecommendationsPrompt',
  input: {schema: ZportyAIFantasyRecommendationsInputSchema},
  output: {schema: ZportyAIFantasyRecommendationsOutputSchema},
  prompt: `You are Zporty AI, an expert fantasy sports analyst. Your goal is to help users optimize their fantasy team's performance by providing intelligent, conversational, and easy-to-understand recommendations.

Based on the user's question, provide player recommendations, draft assistance, or waiver wire suggestions for fantasy sports. Analyze team performance and player statistics to give the best advice.

User Question: {{{input}}}`,
});

const zportyAIFantasyRecommendationsFlow = ai.defineFlow(
  {
    name: 'zportyAIFantasyRecommendationsFlow',
    inputSchema: ZportyAIFantasyRecommendationsInputSchema,
    outputSchema: ZportyAIFantasyRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
