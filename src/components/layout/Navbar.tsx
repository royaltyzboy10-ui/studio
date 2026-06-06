
"use client";

import Link from "next/link";
import { Search, Bell, User, Menu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-headline text-2xl font-bold tracking-tighter text-primary">
              SPORT.CO
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/scores" className="hover:text-primary transition-colors">Scores</Link>
            <Link href="/news" className="hover:text-primary transition-colors">News</Link>
            <Link href="/highlights" className="hover:text-primary transition-colors">Highlights</Link>
            <Link href="/fantasy" className="hover:text-primary transition-colors">Fantasy</Link>
            <Link href="/ai" className="flex items-center gap-1 text-accent hover:opacity-80 transition-opacity">
              <Zap className="h-4 w-4 fill-accent" />
              Zporty AI
            </Link>
          </nav>
        </div>
        
        <div className="flex-1 px-8 hidden lg:block">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search teams, players, or ask Zporty..." 
              className="pl-10 bg-secondary/50 border-none h-9 focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button className="hidden md:inline-flex font-headline font-bold" size="sm">
            UPGRADE
          </Button>
        </div>
      </div>
    </header>
  );
}
