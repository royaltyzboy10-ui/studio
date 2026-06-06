'use server';
/**
 * @fileOverview A Genkit flow for Zporty AI to provide intelligent, data-backed game predictions and analysis.
 *
 * - zportyAIGamePrediction - A function that handles the game prediction process.
 * - ZportyAIGamePredictionInput - The input type for the zportyAIGamePrediction function.
 * - ZportyAIGamePredictionOutput - The return type for the zportyAIGamePrediction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ZportyAIGamePredictionInputSchema = z.object({
  question: z.string().describe("The user's question about a sports game prediction, e.g., 'Who is likely to win Game 3 of the NBA Finals?' or 'What are the Knicks' chances of winning tonight?'"),
});
export type ZportyAIGamePredictionInput = z.infer<typeof ZportyAIGamePredictionInputSchema>;

const ZportyAIGamePredictionOutputSchema = z.object({
  prediction: z.string().describe('The AI-generated prediction and analysis for the sports game.'),
});
export type ZportyAIGamePredictionOutput = z.infer<typeof ZportyAIGamePredictionOutputSchema>;

export async function zportyAIGamePrediction(input: ZportyAIGamePredictionInput): Promise<ZportyAIGamePredictionOutput> {
  return zportyAIGamePredictionFlow(input);
}

const zportyAIGamePredictionPrompt = ai.definePrompt({
  name: 'zportyAIGamePredictionPrompt',
  input: {schema: ZportyAIGamePredictionInputSchema},
  output: {schema: ZportyAIGamePredictionOutputSchema},
  prompt: `You are Zporty AI, an expert sports analyst and predictor for Sport.co. Your goal is to provide intelligent, data-backed predictions and analysis for sports games.

When asked a question about a game or team, provide a clear prediction, explain the reasoning using relevant factors like team performance, player statistics, recent form, historical matchups, and any other pertinent information.

Keep your responses conversational, insightful, and easy to understand for sports fans.

User's Question: {{{question}}}`,
});

const zportyAIGamePredictionFlow = ai.defineFlow(
  {
    name: 'zportyAIGamePredictionFlow',
    inputSchema: ZportyAIGamePredictionInputSchema,
    outputSchema: ZportyAIGamePredictionOutputSchema,
  },
  async input => {
    const {output} = await zportyAIGamePredictionPrompt(input);
    return output!;
  }
);
