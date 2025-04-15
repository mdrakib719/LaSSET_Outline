
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Partners() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">For Partners & Industry</h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Collaborate with our research lab to accelerate innovation and solve complex challenges together.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Technology Transfer</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600">
                Our lab has a strong track record of translating research innovations into commercial applications. We offer various pathways for technology licensing and transfer to industry partners.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Patent licensing opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Co-development partnerships</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Startup incubation support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-research-600 hover:bg-research-700">Explore Technologies</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Consulting Services</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600">
                Our faculty and research scientists offer expert consulting services to help solve complex technical challenges in robotics, space engineering, and related fields.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Technical feasibility studies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Algorithm and system optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Expert technical reviews</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-research-600 hover:bg-research-700">Request Consultation</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Joint Research Projects</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600">
                Collaborate with our research teams on joint research initiatives that align with both academic interests and industry needs.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Co-funded research initiatives</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Access to specialized facilities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Joint publication opportunities</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-research-600 hover:bg-research-700">Propose Collaboration</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sponsorship Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">Lab Affiliate</h3>
                <p className="mt-2 text-3xl font-bold text-research-600">$25,000<span className="text-base font-normal text-gray-500">/year</span></p>
              </div>
              <div className="flex-grow">
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Early access to research findings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Annual research showcase participation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Recognition on lab website</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>

            <div className="bg-research-50 p-8 rounded-lg shadow-sm border border-research-200 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-research-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Popular
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">Research Partner</h3>
                <p className="mt-2 text-3xl font-bold text-research-600">$75,000<span className="text-base font-normal text-gray-500">/year</span></p>
              </div>
              <div className="flex-grow">
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>All Affiliate benefits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>One dedicated research project</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Quarterly progress meetings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Student recruitment opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Priority access to research facilities</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Button className="w-full bg-research-600 hover:bg-research-700">Learn More</Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">Strategic Alliance</h3>
                <p className="mt-2 text-3xl font-bold text-research-600">$150,000+<span className="text-base font-normal text-gray-500">/year</span></p>
              </div>
              <div className="flex-grow">
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>All Partner benefits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Multiple research projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>On-site embedded researcher option</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>IP right of first refusal</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-research-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Executive advisory board seat</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contact our partnership team to discuss how we can collaborate to accelerate innovation and address key challenges in your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-research-600 hover:bg-research-700">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline">
              Download Partnership Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
