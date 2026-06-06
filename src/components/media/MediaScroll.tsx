
"use client";

import { useRef } from "react";
import Image from "next/image";
import { Heart, MessageCircle, Share2, Zap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MOCK_HIGHLIGHTS = [
  { id: 1, title: "Unreal Dunk from Edwards", user: "@NBA", likes: "125k", comments: "2k", image: "https://picsum.photos/seed/dunk2/400/700" },
  { id: 2, title: "Messi's Free Kick Masterclass", user: "@MLS", likes: "89k", comments: "1.2k", image: "https://picsum.photos/seed/messi/400/700" },
  { id: 3, title: "F1 Crash at Monaco", user: "@F1", likes: "210k", comments: "5.5k", image: "https://picsum.photos/seed/crash/400/700" },
];

export function MediaScroll() {
  return (
    <div className="w-full h-[700px] overflow-y-scroll snap-y snap-mandatory scrollbar-hide bg-secondary/20 rounded-2xl border border-white/5">
      {MOCK_HIGHLIGHTS.map((video) => (
        <div key={video.id} className="relative w-full h-full snap-start flex items-center justify-center bg-black overflow-hidden group">
          <Image 
            src={video.image} 
            alt={video.title} 
            fill 
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-white fill-white ml-1" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 p-6 w-full flex items-end justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-primary text-primary-foreground font-headline font-bold">@nba</Badge>
                <span className="text-white font-headline font-bold">NBA Highlights</span>
              </div>
              <p className="text-white text-lg font-bold mb-2 leading-tight">{video.title}</p>
              <div className="flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-wider">
                <Zap className="h-3 w-3 fill-accent" /> Zporty: AI Breakdown Available
              </div>
            </div>
            
            <div className="flex flex-col gap-6 ml-4">
              <div className="flex flex-col items-center gap-1">
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-white/10 backdrop-blur hover:bg-white/20">
                  <Heart className="h-6 w-6 text-white" />
                </Button>
                <span className="text-white text-xs font-bold">{video.likes}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-white/10 backdrop-blur hover:bg-white/20">
                  <MessageCircle className="h-6 w-6 text-white" />
                </Button>
                <span className="text-white text-xs font-bold">{video.comments}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-white/10 backdrop-blur hover:bg-white/20">
                  <Share2 className="h-6 w-6 text-white" />
                </Button>
                <span className="text-white text-xs font-bold">Share</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
