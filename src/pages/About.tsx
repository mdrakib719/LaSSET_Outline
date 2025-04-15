
export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">About Our Lab</h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Pioneering research in robotics and space engineering to solve tomorrow's challenges through interdisciplinary collaboration and innovation.
          </p>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">History and Founding</h2>
          <p className="text-gray-600 mb-4">
            Frontier Research Lab was established in 2015 with a mission to advance interdisciplinary research in robotics and space engineering. Founded by a team of leading scientists from diverse backgrounds, our lab has grown into a hub for innovation and collaboration.
          </p>
          <p className="text-gray-600">
            What began as a small team of researchers has now expanded to include over 30 scientists, engineers, and support staff working across multiple specialized facilities.
          </p>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mission and Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-research-700 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To advance scientific knowledge and technological innovation through cutting-edge research in robotics and space engineering, while fostering collaboration across disciplines and training the next generation of scientists and engineers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-research-700 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                A world where breakthroughs in robotics and space technology contribute to solving humanity's most pressing challenges, improving life on Earth, and enabling sustainable exploration beyond our planet.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Robotics</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Autonomous Navigation</li>
                <li>Human-Robot Interaction</li>
                <li>Robotic Perception</li>
                <li>Multi-Robot Systems</li>
                <li>Soft Robotics</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Space Engineering</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Spacecraft Design</li>
                <li>Orbital Mechanics</li>
                <li>Space Debris Mitigation</li>
                <li>In-Space Manufacturing</li>
                <li>Satellite Communications</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interdisciplinary Projects</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>AI for Space Applications</li>
                <li>Planetary Exploration Robotics</li>
                <li>Sustainable Space Technology</li>
                <li>Earth Observation Systems</li>
                <li>Crisis Response Technology</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Laboratory space" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4 mb-2">State-of-the-Art Laboratories</h3>
              <p className="text-gray-600">
                Our facility includes specialized labs for robotics development, testing, and space systems engineering, equipped with the latest technology to support cutting-edge research.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Computing facility" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4 mb-2">Computing Infrastructure</h3>
              <p className="text-gray-600">
                High-performance computing resources and simulation environments enable complex modeling and data analysis for our research projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
