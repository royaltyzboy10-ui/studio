import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-placeholder");

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-50 dark:bg-slate-900 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Your Fresh Start Begins Here
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Ready to build something amazing? This project is now a clean slate. Tell me what's next and let's prototype it together.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-primary/10 rounded-full text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Fast Prototyping</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Quickly iterate on ideas with a robust tech stack including Next.js and ShadCN UI.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-primary/10 rounded-full text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">AI Integrated</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Leverage Genkit and Google Gemini to build intelligent features from day one.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-primary/10 rounded-full text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Firebase Ready</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Scale your application easily with Firebase Authentication and Firestore.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
