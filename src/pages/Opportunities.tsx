
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Opportunities() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Opportunities</h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Join our team and contribute to cutting-edge research in robotics and space engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Open Positions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research Scientist - Robotics</CardTitle>
                  <CardDescription>Full-time position in autonomous robotics research</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We are seeking a talented Research Scientist to join our Robotics team. The ideal candidate will have expertise in autonomous navigation, perception systems, or multi-robot coordination.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-900">Requirements:</h4>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                        <li>Ph.D. in Robotics, Computer Science, or related field</li>
                        <li>Strong publication record in top-tier conferences/journals</li>
                        <li>Experience with ROS and robot programming</li>
                        <li>Proficiency in C++ and Python</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Benefits:</h4>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                        <li>Competitive salary and benefits package</li>
                        <li>Access to state-of-the-art research facilities</li>
                        <li>Opportunity to collaborate with leading researchers</li>
                        <li>Conference travel support</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Application Deadline: May 15, 2025</div>
                  <Button className="bg-research-600 hover:bg-research-700">Apply Now</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Postdoctoral Researcher - Space Engineering</CardTitle>
                  <CardDescription>2-year position with possibility of extension</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We are looking for a Postdoctoral Researcher to contribute to our Space Debris Mitigation project. The researcher will develop novel approaches for detecting, tracking, and removing orbital debris.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-900">Requirements:</h4>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                        <li>Ph.D. in Aerospace Engineering, Physics, or related field</li>
                        <li>Knowledge of orbital mechanics and space systems</li>
                        <li>Experience with simulation tools and data analysis</li>
                        <li>Programming skills in MATLAB, Python, or similar</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Benefits:</h4>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                        <li>Competitive postdoc stipend</li>
                        <li>Health insurance and benefits</li>
                        <li>Mentorship from senior researchers</li>
                        <li>Publication and patent opportunities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Application Deadline: June 1, 2025</div>
                  <Button className="bg-research-600 hover:bg-research-700">Apply Now</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Research Engineer - Software Development</CardTitle>
                  <CardDescription>Full-time position in research software development</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We are seeking a Research Engineer to develop software tools and applications for our robotics and space engineering projects. The ideal candidate will have strong programming skills and an interest in scientific software development.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-900">Requirements:</h4>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                        <li>B.S. or M.S. in Computer Science or related field</li>
                        <li>3+ years of software development experience</li>
                        <li>Experience with C++, Python, and visualization tools</li>
                        <li>Knowledge of machine learning frameworks a plus</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Benefits:</h4>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                        <li>Competitive salary based on experience</li>
                        <li>Comprehensive benefits package</li>
                        <li>Professional development opportunities</li>
                        <li>Flexible work arrangements</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Application Deadline: Open until filled</div>
                  <Button className="bg-research-600 hover:bg-research-700">Apply Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Student Opportunities */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Opportunities</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Graduate Research Assistantships</h3>
              <p className="text-gray-600 mb-4">
                We offer funded research assistantships for qualified graduate students interested in robotics and space engineering.
              </p>
              <ul className="mb-6 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Full tuition coverage</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Monthly stipend</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Health insurance benefits</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Conference travel funding</span>
                </li>
              </ul>
              <Button className="w-full mb-4">Apply for Assistantship</Button>
              <p className="text-sm text-gray-500">
                Next application deadline: July 15, 2025 for Fall semester
              </p>
            </div>

            <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Undergraduate Research</h3>
              <p className="text-gray-600 mb-4">
                We offer several programs for undergraduate students to gain research experience in our lab.
              </p>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-research-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">Summer Research Program</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    10-week paid summer internship working alongside researchers on active projects.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Application deadline: March 1, 2025
                  </p>
                </div>
                <div className="p-4 bg-research-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">Academic Year Research</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Part-time research opportunities during the academic year with flexible hours.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Applications accepted on a rolling basis
                  </p>
                </div>
                <div className="p-4 bg-research-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">Senior Thesis Projects</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Conduct your senior thesis research in our lab with faculty mentorship.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Proposal deadline: Two months before semester start
                  </p>
                </div>
              </div>
              <Button className="w-full">Explore Undergraduate Opportunities</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
