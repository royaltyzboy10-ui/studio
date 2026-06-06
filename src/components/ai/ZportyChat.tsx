
"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Zap, User, Loader2, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { zportyAiPlayerComparison } from "@/ai/flows/zporty-ai-player-comparison-flow";
import { zportyAINewsSummarization } from "@/ai/flows/zporty-ai-news-summarization";
import { zportyAIGamePrediction } from "@/ai/flows/zporty-ai-game-prediction";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function ZportyChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey! I'm Zporty AI. Ask me anything about scores, predictions, player comparisons, or today's news!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      let response = "";
      // Smart routing based on keywords
      const lower = userMessage.toLowerCase();
      if (lower.includes("compare") || lower.includes("who is better")) {
        response = await zportyAiPlayerComparison(userMessage);
      } else if (lower.includes("news") || lower.includes("summarize") || lower.includes("what's new")) {
        response = await zportyAINewsSummarization({ query: userMessage });
      } else if (lower.includes("win") || lower.includes("prediction") || lower.includes("chance")) {
        const { prediction } = await zportyAIGamePrediction({ question: userMessage });
        response = prediction;
      } else {
        // Default to comparison flow as it's general purpose
        response = await zportyAiPlayerComparison(userMessage);
      }

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I ran into an error. Let's try that again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="glass-card h-[600px] flex flex-col border-primary/20">
      <div className="p-4 border-b flex items-center justify-between bg-primary/5">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <Zap className="h-5 w-5 text-primary-foreground fill-primary-foreground" />
          </div>
          <div>
            <h3 className="font-headline font-bold text-sm">Zporty AI</h3>
            <p className="text-[10px] text-accent font-bold uppercase tracking-widest">Active Now</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setMessages([messages[0]])}>
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>

      <CardContent ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={cn("flex gap-3", m.role === "user" ? "flex-row-reverse" : "flex-row")}>
            <div className={cn(
              "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
              m.role === "user" ? "bg-secondary" : "bg-primary"
            )}>
              {m.role === "user" ? <User className="h-4 w-4" /> : <Zap className="h-4 w-4 text-primary-foreground" />}
            </div>
            <div className={cn(
              "rounded-2xl px-4 py-2 max-w-[80%] text-sm",
              m.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary/50 text-foreground"
            )}>
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <Loader2 className="h-4 w-4 text-primary-foreground animate-spin" />
            </div>
            <div className="bg-secondary/50 rounded-2xl px-4 py-2">
              <div className="flex gap-1">
                <span className="w-1 h-1 bg-foreground/30 rounded-full animate-bounce"></span>
                <span className="w-1 h-1 bg-foreground/30 rounded-full animate-bounce delay-100"></span>
                <span className="w-1 h-1 bg-foreground/30 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          </div>
        )}
      </CardContent>

      <form onSubmit={handleSubmit} className="p-4 border-t bg-secondary/20">
        <div className="relative">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Zporty..."
            className="pr-12 bg-background border-none focus-visible:ring-primary"
          />
          <Button 
            type="submit" 
            size="icon" 
            className="absolute right-1 top-1 h-8 w-8 bg-primary hover:bg-primary/90"
            disabled={isLoading || !input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </Card>
  );
}
