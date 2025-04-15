
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Laboratory research"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-research-900/80 to-research-700/50 mix-blend-multiply" />
        </div>
        
        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">Frontier Research Lab</span>
              <span className="block text-research-200">Shaping the Future of Science</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200">
              Pioneering research in robotics and space engineering to solve tomorrow's challenges through interdisciplinary collaboration and cutting-edge innovation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/research">
                <Button size="lg" className="bg-research-600 hover:bg-research-500">
                  Explore Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  About Our Lab
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
