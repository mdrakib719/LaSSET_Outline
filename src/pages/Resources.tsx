
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Play, Database, Code } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Resources</h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Educational materials, tutorials, technical documentation, and research datasets to support your work.
          </p>
        </div>

        <Tabs defaultValue="educational">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-3">
              <TabsTrigger value="educational">Educational Materials</TabsTrigger>
              <TabsTrigger value="datasets">Datasets & Tools</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="educational">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tutorial 1 */}
              <Card className="flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Introduction to Robotics</CardTitle>
                  <CardDescription>
                    A beginner-friendly tutorial series on robotics fundamentals.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="aspect-video mb-4 bg-gray-100 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Robotics Introduction"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 rounded-full p-2">
                        <Play className="h-8 w-8 text-research-600" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Learn the core concepts of robotics, including kinematics, control systems, and sensor integration. Perfect for students and newcomers to the field.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <span className="bg-research-100 text-research-800 px-2 py-1 rounded-full text-xs">
                      Beginner Level
                    </span>
                    <span className="ml-4">5 Modules</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Start Learning
                  </Button>
                </CardFooter>
              </Card>

              {/* Tutorial 2 */}
              <Card className="flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Orbital Mechanics Fundamentals</CardTitle>
                  <CardDescription>
                    Understanding the principles of spacecraft motion.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="aspect-video mb-4 bg-gray-100 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Orbital Mechanics"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 rounded-full p-2">
                        <Play className="h-8 w-8 text-research-600" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Dive into the mathematics and physics of orbital mechanics, covering Kepler's laws, orbital elements, and spacecraft maneuvers.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <span className="bg-accent1-100 text-accent1-800 px-2 py-1 rounded-full text-xs">
                      Intermediate Level
                    </span>
                    <span className="ml-4">8 Modules</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Start Learning
                  </Button>
                </CardFooter>
              </Card>

              {/* Tutorial 3 */}
              <Card className="flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>AI for Space Applications</CardTitle>
                  <CardDescription>
                    Applying machine learning to space technology challenges.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="aspect-video mb-4 bg-gray-100 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="AI for Space"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 rounded-full p-2">
                        <Play className="h-8 w-8 text-research-600" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Learn how artificial intelligence and machine learning are revolutionizing space exploration, satellite operations, and data analysis.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <span className="bg-accent2-100 text-accent2-800 px-2 py-1 rounded-full text-xs">
                      Advanced Level
                    </span>
                    <span className="ml-4">6 Modules</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Start Learning
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Additional Learning Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-research-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-research-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Research Papers for Students</h3>
                    <p className="mt-1 text-gray-600">
                      Curated collection of fundamental research papers with annotations for students.
                    </p>
                    <a href="#" className="mt-2 inline-flex items-center text-sm font-medium text-research-600 hover:text-research-700">
                      Browse collection
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-research-100 flex items-center justify-center">
                    <Play className="h-5 w-5 text-research-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Video Lectures</h3>
                    <p className="mt-1 text-gray-600">
                      Recorded lectures from our faculty on various topics in robotics and space engineering.
                    </p>
                    <a href="#" className="mt-2 inline-flex items-center text-sm font-medium text-research-600 hover:text-research-700">
                      View library
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="datasets">
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6">Research Datasets</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Database className="h-8 w-8 text-research-600 mr-3" />
                    <h3 className="text-xl font-bold">Autonomous Navigation Dataset</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A comprehensive dataset of sensor readings, environmental maps, and navigation paths from our autonomous robot experiments in various environments.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">3D LIDAR</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Camera</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">GPS</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">IMU</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    <p>Size: 240 GB</p>
                    <p>Last Updated: March, 2025</p>
                    <p>License: MIT</p>
                  </div>
                  <Button className="w-full bg-research-600 hover:bg-research-700">
                    <Download className="h-4 w-4 mr-2" /> Download Dataset
                  </Button>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Database className="h-8 w-8 text-research-600 mr-3" />
                    <h3 className="text-xl font-bold">Orbital Debris Tracking</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Tracking data for over 10,000 pieces of orbital debris, including position, velocity, and size estimates over a five-year period.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Radar</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Optical</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Telemetry</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    <p>Size: 180 GB</p>
                    <p>Last Updated: February, 2025</p>
                    <p>License: Creative Commons</p>
                  </div>
                  <Button className="w-full bg-research-600 hover:bg-research-700">
                    <Download className="h-4 w-4 mr-2" /> Download Dataset
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Software Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Code className="h-6 w-6 text-research-600 mr-2" />
                    <h3 className="text-lg font-semibold">RoboSimulator</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Open-source robotic simulation environment for testing navigation and control algorithms.
                  </p>
                  <div className="flex justify-between">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Python</span>
                    <a href="#" className="text-sm text-research-600 hover:text-research-700">Download</a>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Code className="h-6 w-6 text-research-600 mr-2" />
                    <h3 className="text-lg font-semibold">OrbitTracker</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Tool for visualizing and predicting orbital paths of satellites and space debris.
                  </p>
                  <div className="flex justify-between">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">C++</span>
                    <a href="#" className="text-sm text-research-600 hover:text-research-700">Download</a>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Code className="h-6 w-6 text-research-600 mr-2" />
                    <h3 className="text-lg font-semibold">CollisionML</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Machine learning library for predicting potential orbital collisions.
                  </p>
                  <div className="flex justify-between">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Python/TensorFlow</span>
                    <a href="#" className="text-sm text-research-600 hover:text-research-700">Download</a>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Code className="h-6 w-6 text-research-600 mr-2" />
                    <h3 className="text-lg font-semibold">SensorKit</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Toolkit for sensor data processing and fusion in robotic applications.
                  </p>
                  <div className="flex justify-between">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">C++/ROS</span>
                    <a href="#" className="text-sm text-research-600 hover:text-research-700">Download</a>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Code className="h-6 w-6 text-research-600 mr-2" />
                    <h3 className="text-lg font-semibold">SpaceViz</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    3D visualization tool for space missions and satellite operations.
                  </p>
                  <div className="flex justify-between">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">JavaScript/WebGL</span>
                    <a href="#" className="text-sm text-research-600 hover:text-research-700">Download</a>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Code className="h-6 w-6 text-research-600 mr-2" />
                    <h3 className="text-lg font-semibold">HRIToolkit</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Framework for developing and testing human-robot interaction interfaces.
                  </p>
                  <div className="flex justify-between">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Python/React</span>
                    <a href="#" className="text-sm text-research-600 hover:text-research-700">Download</a>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="documentation">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                  <h2 className="text-xl font-bold mb-4">Technical Documentation</h2>
                  <nav className="space-y-1">
                    <a href="#" className="block px-3 py-2 text-sm font-medium text-research-700 bg-research-50 rounded-md">
                      Lab Equipment
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                      Software Tools
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                      Research Protocols
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                      Experimental Setup
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                      Data Processing
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                      Development Guidelines
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                      API References
                    </a>
                  </nav>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Lab Equipment Documentation</h2>
                  
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold mb-4">Robotic Platforms</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <img 
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
                            alt="Mobile Robot Platform"
                            className="w-16 h-16 object-cover rounded-md mr-3"
                          />
                          <h4 className="text-lg font-medium">Mobile Robot Platform A200</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          All-terrain mobile robot with advanced locomotion and sensing capabilities for autonomous navigation research.
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs bg-research-100 text-research-800 px-2 py-1 rounded-full">In Service</span>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" /> View Manual
                          </Button>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <img 
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
                            alt="Robotic Arm"
                            className="w-16 h-16 object-cover rounded-md mr-3"
                          />
                          <h4 className="text-lg font-medium">Precision Robotic Arm RX-7</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          High-precision robotic arm with 7 degrees of freedom for manipulation research and human-robot interaction studies.
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs bg-research-100 text-research-800 px-2 py-1 rounded-full">In Service</span>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" /> View Manual
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-xl font-semibold mb-4">Sensor Systems</h3>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="text-lg font-medium mb-2">3D LIDAR Scanning System</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          High-resolution 3D LIDAR system for environmental mapping and obstacle detection.
                        </p>
                        <div className="text-sm text-gray-500 mb-3">
                          <p><span className="font-medium">Model:</span> LidarTech X64</p>
                          <p><span className="font-medium">Range:</span> 120m</p>
                          <p><span className="font-medium">Resolution:</span> 0.1°</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" /> Technical Specifications
                        </Button>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="text-lg font-medium mb-2">Multi-Camera Vision System</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Synchronized multi-camera array for computer vision research and visual SLAM.
                        </p>
                        <div className="text-sm text-gray-500 mb-3">
                          <p><span className="font-medium">Resolution:</span> 4K per camera</p>
                          <p><span className="font-medium">Cameras:</span> 6-unit array</p>
                          <p><span className="font-medium">Frame Rate:</span> Up to 120fps</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" /> Technical Specifications
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Computing Infrastructure</h3>
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-medium mb-3">High-Performance Computing Cluster</h4>
                      <p className="text-gray-600 mb-4">
                        Our lab is equipped with a dedicated high-performance computing cluster for simulation, data processing, and machine learning research.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="text-sm text-gray-500">
                          <p className="font-medium text-gray-700 mb-1">Main Cluster</p>
                          <p><span className="font-medium">Nodes:</span> 12</p>
                          <p><span className="font-medium">CPU:</span> 64 cores per node</p>
                          <p><span className="font-medium">RAM:</span> 128GB per node</p>
                          <p><span className="font-medium">Storage:</span> 500TB distributed storage</p>
                        </div>
                        <div className="text-sm text-gray-500">
                          <p className="font-medium text-gray-700 mb-1">GPU Servers</p>
                          <p><span className="font-medium">Servers:</span> 4</p>
                          <p><span className="font-medium">GPUs:</span> 8x NVIDIA A100 per server</p>
                          <p><span className="font-medium">RAM:</span> 1TB per server</p>
                          <p><span className="font-medium">Storage:</span> 50TB NVMe per server</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" /> Usage Guidelines
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" /> Access Request Form
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" /> System Specifications
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
