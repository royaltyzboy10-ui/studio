import { Button } from "@/components/ui/button";
import { Play, UserPlus, LogIn, Settings, Trophy, Zap, Target } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const arenaImage = PlaceHolderImages.find(img => img.id === "arena-bg");

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden arena-lighting">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={arenaImage?.imageUrl || "https://picsum.photos/seed/arena/1920/1080"}
          alt="Basketball Arena"
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          priority
          data-ai-hint="basketball arena"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      {/* Animated Light Beams */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[1px] h-[120%] bg-blue-500/20 blur-sm rotate-12 animate-pulse" />
        <div className="absolute top-[-10%] right-[20%] w-[1px] h-[120%] bg-purple-500/20 blur-sm -rotate-12 animate-pulse [animation-delay:1s]" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 container px-4 flex flex-col items-center text-center space-y-12 py-20">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-[0.2em] mb-4">
            <Zap className="h-3 w-3 fill-accent" /> Season 2 Is Here
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white italic leading-tight">
            WELCOME TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-accent animate-gradient-x">
              ZAONER II
            </span>
          </h1>
          <p className="mx-auto max-w-[600px] text-white/60 md:text-xl font-medium tracking-tight">
            The next generation of street basketball. Build your legacy, dominate the court, and rise to the top of the world standings.
          </p>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          <Button size="lg" className="h-20 text-xl font-black italic bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)] group">
            <Play className="mr-3 h-6 w-6 fill-white" /> PLAY NOW
          </Button>
          <Button size="lg" variant="outline" className="h-20 text-xl font-black italic border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white group">
            <UserPlus className="mr-3 h-6 w-6" /> CREATE ACCOUNT
          </Button>
          <Button size="lg" variant="ghost" className="h-16 font-bold text-white/70 hover:text-white hover:bg-white/5">
            <LogIn className="mr-2 h-5 w-5" /> SIGN IN
          </Button>
          <Button size="lg" variant="ghost" className="h-16 font-bold text-white/70 hover:text-white hover:bg-white/5">
            <Settings className="mr-2 h-5 w-5" /> SETTINGS
          </Button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-20">
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center space-y-3">
            <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
              <Trophy className="h-6 w-6" />
            </div>
            <h3 className="font-black italic text-lg text-white uppercase tracking-wider">Global League</h3>
            <p className="text-sm text-white/50">Compete with players worldwide for the #1 spot.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center space-y-3">
            <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-black italic text-lg text-white uppercase tracking-wider">Skill System</h3>
            <p className="text-sm text-white/50">Unlock legendary moves and boost your attributes.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center space-y-3">
            <div className="p-3 bg-accent/20 rounded-xl text-accent">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-black italic text-lg text-white uppercase tracking-wider">Team Play</h3>
            <p className="text-sm text-white/50">Form crews and dominate the concrete jungle.</p>
          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="relative z-10 mt-10 pb-12 opacity-30 text-center">
        <span className="text-sm font-bold tracking-[0.5em] text-white uppercase">Authentic Street Soul</span>
      </footer>
    </div>
  );
}