
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    id: 1,
    title: "Autonomous Navigation Systems",
    description: "Our team has developed a breakthrough in autonomous navigation that enables robots to navigate complex and dynamic environments with unprecedented accuracy.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Robotics",
    link: "/research/autonomous-navigation"
  },
  {
    id: 2,
    title: "Space Debris Mitigation Technology",
    description: "A novel approach to identifying and removing orbital debris, improving safety for satellites and future space missions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Space Engineering",
    link: "/research/space-debris"
  },
  {
    id: 3,
    title: "Human-Robot Collaboration Framework",
    description: "Enhancing productivity and safety in human-robot collaborative environments through advanced sensing and responsive systems.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Interdisciplinary",
    link: "/research/human-robot-collaboration"
  },
];

export function ResearchHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Research Highlights</h2>
          <p className="mt-4 text-xl text-gray-600">
            Recent breakthroughs and ongoing projects from our laboratory
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <Card key={highlight.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={highlight.image} 
                  alt={highlight.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="bg-research-100 text-research-800 hover:bg-research-200">
                    {highlight.category}
                  </Badge>
                </div>
                <CardTitle className="mt-2">{highlight.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {highlight.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {highlight.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link 
                  to={highlight.link} 
                  className="text-research-600 hover:text-research-700 inline-flex items-center text-sm font-medium"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/research" 
            className="inline-flex items-center text-research-600 hover:text-research-800 font-medium"
          >
            View all research projects <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
