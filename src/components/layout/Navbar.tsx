"use client";

import Link from "next/link";
import { Settings, User, LogIn, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter italic text-white">
              ZAONER <span className="text-accent">II</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-white/70">
            <Link href="/courts" className="transition-colors hover:text-white">Courts</Link>
            <Link href="/players" className="transition-colors hover:text-white">Players</Link>
            <Link href="/league" className="transition-colors hover:text-white">League</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 gap-2">
              <LogIn className="h-4 w-4" /> Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold px-6">
              Create Account
            </Button>
            <Button variant="ghost" size="icon" className="text-white/50 hover:text-white">
              <Settings className="h-5 w-5" />
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