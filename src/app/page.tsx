import { Navbar } from "@/components/layout/Navbar";
import { LiveScoreTicker } from "@/components/scores/LiveScoreTicker";
import { FeaturedContent } from "@/components/feed/FeaturedContent";
import { ZportyChat } from "@/components/ai/ZportyChat";
import { MediaScroll } from "@/components/media/MediaScroll";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Newspaper, Trophy, Users, Zap, PlayCircle } from "lucide-react";

const RECENT_NEWS = [
  { id: 1, tag: "FINALS", title: "Wembanyama vs Brunson: The Battle for the Larry O'Brien Trophy", time: "1h ago" },
  { id: 2, tag: "TRADE", title: "Knicks Eyeing Defensive Depth Ahead of Final Showdown", time: "3h ago" },
  { id: 3, tag: "INJURY", title: "Jeremy Sochan Questionable for Game 7 with Ankle Sprain", time: "5h ago" },
  { id: 4, tag: "MLB", title: "Shohei Ohtani Makes History with Unprecedented 50/50 Season", time: "12h ago" },
];

const TOP_TEAMS = [
  { rank: 1, team: "San Antonio Spurs", record: "45-12", color: "#000000" },
  { rank: 2, team: "New York Knicks", record: "44-13", color: "#F58426" },
  { rank: 3, team: "Boston Celtics", record: "42-15", color: "#007A33" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LiveScoreTicker />
      
      <main className="flex-1 container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* Main Content Column */}
          <div className="xl:col-span-8 space-y-8">
            <FeaturedContent />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                  <CardTitle className="font-headline font-bold text-xl flex items-center gap-2">
                    <Newspaper className="h-5 w-5 text-primary" /> Personalized Feed
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {RECENT_NEWS.map((item) => (
                    <div key={item.id} className="group cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-[9px] h-4 py-0 font-bold border-primary text-primary">{item.tag}</Badge>
                        <span className="text-[10px] text-muted-foreground uppercase font-bold">{item.time}</span>
                      </div>
                      <h4 className="font-bold text-sm group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                  <CardTitle className="font-headline font-bold text-xl flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-accent" /> Prediction Arena
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-secondary/40 p-4 rounded-xl space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      <span>Finals Poll</span>
                      <span className="text-accent">Live</span>
                    </div>
                    <p className="font-bold text-sm">Who wins Game 7 between Spurs and Knicks?</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-background/50 cursor-pointer hover:bg-primary/20 transition-colors border border-white/5">
                        <span className="text-sm font-bold">San Antonio Spurs</span>
                        <span className="text-xs font-medium text-muted-foreground">48%</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-background/50 cursor-pointer hover:bg-primary/20 transition-colors border border-white/5">
                        <span className="text-sm font-bold">New York Knicks</span>
                        <span className="text-xs font-medium text-muted-foreground">52%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline font-bold text-2xl flex items-center gap-2">
                <PlayCircle className="h-6 w-6 text-primary" /> Trending Highlights
              </h2>
              <MediaScroll />
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="xl:col-span-4 space-y-8">
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-headline font-bold text-xl flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent fill-accent" /> Zporty AI
                </h2>
                <Badge className="bg-accent/20 text-accent hover:bg-accent/30 cursor-pointer">Upgrade to Pro</Badge>
              </div>
              <ZportyChat />
            </section>

            <section className="space-y-4">
              <h2 className="font-headline font-bold text-xl flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" /> Power Rankings
              </h2>
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-0">
                  {TOP_TEAMS.map((team, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                      <span className="text-2xl font-headline font-black text-muted-foreground/30 italic">#{team.rank}</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm">{team.team}</h4>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">{team.record}</p>
                      </div>
                      <div className="h-6 w-1 rounded-full" style={{ backgroundColor: team.color }} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline font-bold text-xl flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" /> Fantasy Insights
              </h2>
              <Card className="glass-card bg-gradient-to-br from-primary/10 to-transparent">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <Zap className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Waiver Wire Alert</h4>
                      <p className="text-xs text-muted-foreground">Pick up Miles McBride. Minutes expected to spike if Brunson's usage stays high.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-background/40 p-2 rounded-lg text-center border border-white/5">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">Projected</p>
                      <p className="text-lg font-headline font-black text-primary">28.2</p>
                    </div>
                    <div className="bg-background/40 p-2 rounded-lg text-center border border-white/5">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">Value Rank</p>
                      <p className="text-lg font-headline font-black text-accent">#1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

        </div>
      </main>

      <footer className="mt-20 border-t bg-secondary/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <span className="font-headline text-2xl font-black text-primary mb-6 block">SPORT.CO</span>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground mb-8">
            <a href="#" className="hover:text-foreground">About</a>
            <a href="#" className="hover:text-foreground">Careers</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2024 Sport.co. The future of sports media. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
