
"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

const MOCK_GAMES = [
  { league: "NBA", home: "SAS", away: "NYK", homeScore: 102, awayScore: 105, status: "Q4 2:14" },
  { league: "NBA", home: "BOS", away: "DAL", homeScore: 88, awayScore: 92, status: "FINAL" },
  { league: "NFL", home: "KC", away: "SF", homeScore: 24, awayScore: 21, status: "Q3 11:05" },
  { league: "MLB", home: "NYY", away: "LAD", homeScore: 3, awayScore: 1, status: "BOT 7" },
  { league: "UCL", home: "RMA", away: "MCY", homeScore: 2, awayScore: 2, status: "82'" },
  { league: "NHL", home: "COL", away: "EDM", homeScore: 4, awayScore: 3, status: "FINAL/OT" },
  { league: "NBA", home: "PHX", away: "DEN", homeScore: 75, awayScore: 78, status: "Q3 4:45" },
];

export function LiveScoreTicker() {
  return (
    <div className="w-full bg-secondary/30 border-b overflow-hidden whitespace-nowrap h-12 flex items-center">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {[...MOCK_GAMES, ...MOCK_GAMES].map((game, i) => (
          <div key={i} className="flex items-center gap-4 px-6 border-r border-border/50">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{game.league}</span>
            <div className="flex items-center gap-3 font-headline text-sm font-bold">
              <span className={game.homeScore > game.awayScore ? "text-foreground" : "text-muted-foreground"}>{game.home} {game.homeScore}</span>
              <span className="text-muted-foreground/30">•</span>
              <span className={game.awayScore > game.homeScore ? "text-foreground" : "text-muted-foreground"}>{game.awayScore} {game.away}</span>
            </div>
            <Badge variant="outline" className="text-[9px] h-5 py-0 px-1.5 border-accent text-accent">
              {game.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
