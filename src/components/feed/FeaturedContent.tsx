
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PlayCircle, TrendingUp, Calendar, Trophy, Users, Timer } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function FeaturedContent() {
  const featured = PlaceHolderImages.find(img => img.id === "nba-hero");

  return (
    <section className="relative h-[400px] w-full rounded-2xl overflow-hidden group">
      <Image 
        src={featured?.imageUrl || "https://picsum.photos/seed/sports/1200/600"}
        alt="Featured Sports"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        data-ai-hint="nba basketball game"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 p-8 w-full max-w-2xl">
        <div className="flex gap-2 mb-4">
          <Badge className="bg-primary text-primary-foreground font-headline uppercase font-bold text-[10px] px-3">Featured</Badge>
          <Badge variant="outline" className="border-accent text-accent bg-accent/10 font-headline uppercase font-bold text-[10px] px-3">Live Now</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 tracking-tighter leading-none">
          NBA FINALS: LAKERS VS WARRIORS GAME 7
        </h1>
        <p className="text-muted-foreground mb-6 line-clamp-2 max-w-lg">
          The ultimate showdown in the West. LeBron and Curry face off one last time for the title. Stay tuned for live updates, highlights, and AI analysis.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="font-headline font-bold">WATCH LIVE</Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="font-headline font-bold">GAME DETAILS</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] glass-card border-primary/20">
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl font-bold flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" /> Game 7 Statistics
                </DialogTitle>
                <DialogDescription className="text-muted-foreground italic">
                  Lakers vs Warriors - Crypto.com Arena, Los Angeles
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Team Comparison</h4>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Field Goal %</span>
                        <span className="font-bold">LAL 48% - GSW 45%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden flex">
                        <div className="bg-primary h-full w-[48%]" />
                        <div className="bg-accent h-full w-[45%]" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>3-Point %</span>
                        <span className="font-bold">LAL 34% - GSW 42%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden flex">
                        <div className="bg-primary h-full w-[34%]" />
                        <div className="bg-accent h-full w-[42%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-accent">Key Matchup</h4>
                  <div className="bg-secondary/30 p-4 rounded-xl space-y-3 border border-white/5">
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">LeBron James</p>
                        <p className="text-lg font-black font-headline">32 PTS</p>
                      </div>
                      <span className="text-xs font-bold text-muted-foreground italic">VS</span>
                      <div className="text-center">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Stephen Curry</p>
                        <p className="text-lg font-black font-headline text-accent">35 PTS</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Timer className="h-3 w-3" />
                    <span>Time Remaining: 2:14 Q4</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <Button variant="ghost" onClick={() => {}} className="text-xs font-bold">BOX SCORE</Button>
                <Button className="bg-primary text-primary-foreground font-bold">FULL PLAY-BY-PLAY</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="absolute top-8 right-8 hidden xl:flex flex-col gap-4">
        <div className="glass-card p-4 w-64 rounded-xl">
          <h4 className="flex items-center gap-2 font-headline font-bold text-xs mb-3 text-accent uppercase tracking-widest">
            <TrendingUp className="h-3 w-3" /> Trending Stats
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Win Prob</span>
              <span className="font-bold">LAL 52%</span>
            </div>
            <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[52%]" />
            </div>
          </div>
        </div>
        
        <div className="glass-card p-4 w-64 rounded-xl">
          <h4 className="flex items-center gap-2 font-headline font-bold text-xs mb-3 text-primary uppercase tracking-widest">
            <Calendar className="h-3 w-3" /> Upcoming UCL
          </h4>
          <div className="space-y-2">
            <p className="text-sm font-bold">Real Madrid vs Man City</p>
            <p className="text-xs text-muted-foreground">Tomorrow, 3:00 PM ET</p>
          </div>
        </div>
      </div>
    </section>
  );
}
