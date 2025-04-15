
export default function Publications() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Publications</h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Our peer-reviewed research articles, conference papers, technical reports, and patents.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-4">Filter Publications</h2>
              
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Publication Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="journal" type="checkbox" className="h-4 w-4 text-research-600 focus:ring-research-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="journal" className="ml-2 text-sm text-gray-600">Journal Articles</label>
                  </div>
                  <div className="flex items-center">
                    <input id="conference" type="checkbox" className="h-4 w-4 text-research-600 focus:ring-research-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="conference" className="ml-2 text-sm text-gray-600">Conference Papers</label>
                  </div>
                  <div className="flex items-center">
                    <input id="technical" type="checkbox" className="h-4 w-4 text-research-600 focus:ring-research-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="technical" className="ml-2 text-sm text-gray-600">Technical Reports</label>
                  </div>
                  <div className="flex items-center">
                    <input id="patents" type="checkbox" className="h-4 w-4 text-research-600 focus:ring-research-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="patents" className="ml-2 text-sm text-gray-600">Patents</label>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Research Area</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="robotics" type="checkbox" className="h-4 w-4 text-research-600 focus:ring-research-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="robotics" className="ml-2 text-sm text-gray-600">Robotics</label>
                  </div>
                  <div className="flex items-center">
                    <input id="space" type="checkbox" className="h-4 w-4 text-research-600 focus:ring-research-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="space" className="ml-2 text-sm text-gray-600">Space Engineering</label>
                  </div>
                  <div className="flex items-center">
                    <input id="ai" type="checkbox" className="h-4 w-4 text-research-600 focus:ring-research-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="ai" className="ml-2 text-sm text-gray-600">AI & Machine Learning</label>
                  </div>
                  <div className="flex items-center">
                    <input id="interdisciplinary" type="checkbox" className="h-4 w-4 text-research-600 focus:ring-research-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="interdisciplinary" className="ml-2 text-sm text-gray-600">Interdisciplinary</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Year</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="2025" type="checkbox" className="h-4 w-4 text-research-600 focus:ring-research-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="2025" className="ml-2 text-sm text-gray-600">2025</label>
                  </div>
                  <div className="flex items-center">
                    <input id="2024" type="checkbox" className="h-4 w-4 text-research-600 focus:ring-research-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="2024" className="ml-2 text-sm text-gray-600">2024</label>
                  </div>
                  <div className="flex items-center">
                    <input id="2023" type="checkbox" className="h-4 w-4 text-research-600 focus:ring-research-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="2023" className="ml-2 text-sm text-gray-600">2023</label>
                  </div>
                  <div className="flex items-center">
                    <input id="earlier" type="checkbox" className="h-4 w-4 text-research-600 focus:ring-research-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="earlier" className="ml-2 text-sm text-gray-600">Earlier</label>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="w-full bg-research-600 text-white px-4 py-2 rounded hover:bg-research-700 transition">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-200">Journal Articles</h2>
              
              <div className="space-y-8">
                {/* Journal Article 1 */}
                <div className="pb-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Adaptive Navigation Strategies for Autonomous Robots in Dynamic Environments</h3>
                  <p className="text-sm text-gray-600 mt-1">Chen, E., Johnson, M., Williams, S., et al.</p>
                  <p className="text-sm text-gray-500 mt-1"><span className="font-medium">Journal of Robotic Systems</span>, 2025, 42(3), 215-230</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 bg-research-100 text-research-800 rounded-full">Robotics</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Navigation</span>
                  </div>
                  <div className="mt-3 flex space-x-3">
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">Abstract</a>
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">Full Paper</a>
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">DOI</a>
                  </div>
                </div>
                
                {/* Journal Article 2 */}
                <div className="pb-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Space Debris Detection and Tracking: A Novel Machine Learning Approach</h3>
                  <p className="text-sm text-gray-600 mt-1">Johnson, M., Chen, E., Smith, A., et al.</p>
                  <p className="text-sm text-gray-500 mt-1"><span className="font-medium">Aerospace Engineering Journal</span>, 2024, 38(2), 145-162</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 bg-research-100 text-research-800 rounded-full">Space Engineering</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Machine Learning</span>
                  </div>
                  <div className="mt-3 flex space-x-3">
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">Abstract</a>
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">Full Paper</a>
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">DOI</a>
                  </div>
                </div>
                
                {/* Journal Article 3 */}
                <div className="pb-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Human-Robot Trust Models for Collaborative Task Execution</h3>
                  <p className="text-sm text-gray-600 mt-1">Williams, S., Chen, E., Brown, T., et al.</p>
                  <p className="text-sm text-gray-500 mt-1"><span className="font-medium">IEEE Transactions on Human-Robot Interaction</span>, 2024, 12(4), 318-334</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 bg-research-100 text-research-800 rounded-full">Robotics</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Human-Robot Interaction</span>
                  </div>
                  <div className="mt-3 flex space-x-3">
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">Abstract</a>
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">Full Paper</a>
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">DOI</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-right">
                <a href="#" className="text-research-600 hover:text-research-800 text-sm font-medium">View all journal articles →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-200">Conference Papers</h2>
              
              <div className="space-y-8">
                {/* Conference Paper 1 */}
                <div className="pb-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Real-time Obstacle Avoidance for Multi-Agent Robotic Systems</h3>
                  <p className="text-sm text-gray-600 mt-1">Smith, A., Chen, E., Johnson, M., et al.</p>
                  <p className="text-sm text-gray-500 mt-1"><span className="font-medium">International Conference on Robotics and Automation (ICRA)</span>, 2025</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 bg-research-100 text-research-800 rounded-full">Robotics</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Multi-Agent Systems</span>
                  </div>
                  <div className="mt-3 flex space-x-3">
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">Abstract</a>
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">Full Paper</a>
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">Presentation</a>
                  </div>
                </div>
                
                {/* Conference Paper 2 */}
                <div className="pb-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Sustainable Materials for In-Space Manufacturing</h3>
                  <p className="text-sm text-gray-600 mt-1">Johnson, M., Williams, S., Brown, T., et al.</p>
                  <p className="text-sm text-gray-500 mt-1"><span className="font-medium">Space Technology & Applications Conference</span>, 2024</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 bg-research-100 text-research-800 rounded-full">Space Engineering</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Materials Science</span>
                  </div>
                  <div className="mt-3 flex space-x-3">
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">Abstract</a>
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">Full Paper</a>
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">Presentation</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-right">
                <a href="#" className="text-research-600 hover:text-research-800 text-sm font-medium">View all conference papers →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-200">Patents</h2>
              
              <div className="space-y-8">
                <div className="pb-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Method and Apparatus for Autonomous Space Debris Capture</h3>
                  <p className="text-sm text-gray-600 mt-1">Chen, E., Johnson, M., Williams, S.</p>
                  <p className="text-sm text-gray-500 mt-1"><span className="font-medium">U.S. Patent 11,845,392</span>, Filed: June 2023, Granted: February 2025</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 bg-research-100 text-research-800 rounded-full">Space Engineering</span>
                  </div>
                  <div className="mt-3">
                    <a href="#" className="text-sm text-research-600 hover:text-research-800">Patent Details</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-right">
                <a href="#" className="text-research-600 hover:text-research-800 text-sm font-medium">View all patents →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
