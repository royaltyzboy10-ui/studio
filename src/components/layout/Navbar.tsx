"use client";

import Link from "next/link";
import { Settings, User, LogIn, Menu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-primary">
               <Zap className="h-5 w-5 text-white fill-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter italic text-white uppercase">
              ZAONER <span className="text-accent">II</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
            <Link href="/courts" className="transition-colors hover:text-white">Courts</Link>
            <Link href="/players" className="transition-colors hover:text-white">Players</Link>
            <Link href="/league" className="transition-colors hover:text-white">League</Link>
            <Link href="/scores" className="transition-colors hover:text-white text-accent">Live Scores</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10 gap-2 font-bold uppercase tracking-widest text-[10px]">
              <LogIn className="h-4 w-4" /> Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-black italic px-6 uppercase tracking-wider">
              Create Account
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}