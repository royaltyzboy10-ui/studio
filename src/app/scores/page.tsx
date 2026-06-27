"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { LiveScoreTicker } from "@/components/scores/LiveScoreTicker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Trophy, Timer, ChevronRight } from "lucide-react";
import { zportyAIGamePrediction } from "@/ai/flows/zporty-ai-game-prediction";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SCORES_DATA = {
  NBA: [
    { id: "nba-1", home: "San Antonio Spurs", away: "New York Knicks", homeScore: 102, awayScore: 105, status: "Q4 2:14", details: "Game 7 - Finals", homeLogoId: "sas-logo", awayLogoId: "nyk-logo" },
    { id: "nba-2", home: "Boston Celtics", away: "Dallas Mavericks", homeScore: 112, awayScore: 98, status: "FINAL", details: "Eastern Conference Semis", homeLogoId: "bos-logo", awayLogoId: "dal-logo" },
  ],
  NFL: [
    { id: "nfl-1", home: "Kansas City Chiefs", away: "San Francisco 49ers", homeScore: 24, awayScore: 21, status: "Q3 11:05", details: "Sunday Night Football", homeLogoId: "kc-logo", awayLogoId: "sf-logo" },
  ],
  SOCCER: [
    { id: "soc-1", home: "Real Madrid", away: "Manchester City", homeScore: 2, awayScore: 2, status: "82'", details: "Champions League", homeLogoId: "soccer-hero", awayLogoId: "soccer-hero" },
  ]
};

export default function ScoresPage() {
  const [activeTab, setActiveTab] = useState("NBA");
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);

  async function handleGetPrediction(home: string, away: string) {
    setIsPredicting(true);
    setPrediction(null);
    try {
      const result = await zportyAIGamePrediction({ 
        question: `Who is likely to win the matchup between ${home} and ${away}? Provide a brief analysis.` 
      });
      setPrediction(result.prediction);
    } catch (error) {
      setPrediction("Sorry, I couldn't generate a prediction right now.");
    } finally {
      setIsPredicting(false);
    }
  }

  function getImageUrl(logoId: string) {
    const img = PlaceHolderImages.find(p => p.id === logoId);
    return img?.imageUrl || `https://picsum.photos/seed/${logoId}/64/64`;
  }

  function getImageHint(logoId: string) {
    const img = PlaceHolderImages.find(p => p.id === logoId);
    return img?.imageHint || "sports logo";
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LiveScoreTicker />

      <main className="flex-1 container mx-auto px-4 py-8">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-headline font-black tracking-tight flex items-center gap-3">
              <Trophy className="h-10 w-10 text-primary" /> LIVE SCORES
            </h1>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs mt-1">
              Real-time updates across all major leagues
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
              <Timer className="h-3 w-3 mr-1" /> LIVE: 12 GAMES
            </Badge>
          </div>
        </header>

        <Tabs defaultValue="NBA" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto p-1 bg-secondary/50">
            {Object.keys(SCORES_DATA).map((league) => (
              <TabsTrigger 
                key={league} 
                value={league}
                className="font-headline font-bold py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {league}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(SCORES_DATA).map(([league, games]) => (
            <TabsContent key={league} value={league} className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {games.map((game) => (
                  <Card key={game.id} className="glass-card overflow-hidden group hover:border-primary/50 transition-colors">
                    <CardHeader className="p-4 border-b bg-white/5 flex flex-row items-center justify-between">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{game.details}</span>
                      <Badge variant="outline" className={game.status.includes("FINAL") ? "text-muted-foreground border-white/10" : "text-accent border-accent animate-pulse"}>
                        {game.status}
                      </Badge>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-8">
                        {/* Away Team */}
                        <div className="flex flex-col items-center gap-2 flex-1">
                          <div className="h-16 w-16 rounded-full bg-secondary/50 relative overflow-hidden flex items-center justify-center">
                            <Image 
                              src={getImageUrl(game.awayLogoId)}
                              alt={game.away}
                              width={64}
                              height={64}
                              className="object-cover"
                              data-ai-hint={getImageHint(game.awayLogoId)}
                            />
                          </div>
                          <span className="font-bold text-sm text-center line-clamp-1">{game.away}</span>
                          <span className="text-3xl font-black font-headline">{game.awayScore}</span>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                          <span className="text-xs font-bold text-muted-foreground italic uppercase">VS</span>
                          <div className="h-8 w-px bg-white/10" />
                        </div>

                        {/* Home Team */}
                        <div className="flex flex-col items-center gap-2 flex-1">
                          <div className="h-16 w-16 rounded-full bg-secondary/50 relative overflow-hidden flex items-center justify-center">
                            <Image 
                              src={getImageUrl(game.homeLogoId)}
                              alt={game.home}
                              width={64}
                              height={64}
                              className="object-cover"
                              data-ai-hint={getImageHint(game.homeLogoId)}
                            />
                          </div>
                          <span className="font-bold text-sm text-center line-clamp-1">{game.home}</span>
                          <span className="text-3xl font-black font-headline text-primary">{game.homeScore}</span>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/5 flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="secondary" 
                              className="flex-1 font-bold text-xs"
                              onClick={() => handleGetPrediction(game.home, game.away)}
                            >
                              <Zap className="h-4 w-4 mr-2 text-accent fill-accent" /> ZPORTY ANALYSIS
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="glass-card border-primary/20">
                            <DialogHeader>
                              <DialogTitle className="font-headline text-xl flex items-center gap-2">
                                <Zap className="h-5 w-5 text-accent fill-accent" /> AI Game Prediction
                              </DialogTitle>
                              <DialogDescription>
                                Deep dive analysis for {game.away} @ {game.home}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="py-4">
                              {isPredicting ? (
                                <div className="flex flex-col items-center justify-center py-12 gap-4">
                                  <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                                  <p className="text-sm font-bold text-muted-foreground animate-pulse">Consulting the sports oracle...</p>
                                </div>
                              ) : (
                                <div className="bg-secondary/30 p-4 rounded-xl border border-white/10">
                                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{prediction}</p>
                                </div>
                              )}
                            </div>
                            <div className="flex justify-end">
                              <Button className="font-bold">FULL BREAKDOWN</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" className="flex-1 font-bold text-xs group">
                          BOX SCORE <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <footer className="mt-20 border-t bg-secondary/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <span className="font-headline text-2xl font-black text-primary mb-6 block">SPORT.CO</span>
          <p className="text-xs text-muted-foreground">© 2024 Sport.co. The future of sports media. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
