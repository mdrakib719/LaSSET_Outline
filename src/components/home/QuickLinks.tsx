
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Book, Calendar, Briefcase, ExternalLink } from "lucide-react";

const links = [
  {
    title: "Publications",
    description: "Access our research papers, articles and technical reports",
    icon: FileText,
    href: "/publications"
  },
  {
    title: "Meet Our Team",
    description: "Learn about the researchers and staff behind our work",
    icon: Users,
    href: "/people"
  },
  {
    title: "Educational Resources",
    description: "Tutorials, guides and learning materials",
    icon: Book,
    href: "/resources"
  },
  {
    title: "Upcoming Events",
    description: "Seminars, workshops and conferences",
    icon: Calendar,
    href: "/news#events"
  },
  {
    title: "Career Opportunities",
    description: "Join our team as a researcher, student or staff",
    icon: Briefcase,
    href: "/opportunities"
  },
  {
    title: "Industry Partnerships",
    description: "Collaboration opportunities for companies and organizations",
    icon: ExternalLink,
    href: "/partners"
  }
];

export function QuickLinks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Quick Links</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link key={index} to={link.href}>
              <Card className="h-full hover:shadow-md transition-all duration-300 hover:border-research-200 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-research-100 p-3 text-research-600">
                      <link.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{link.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{link.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
