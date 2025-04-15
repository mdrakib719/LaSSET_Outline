
export default function People() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Team</h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Meet the researchers, faculty, and students who make our cutting-edge research possible.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Director */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Dr. Emily Chen"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Dr. Emily Chen</h3>
              <p className="text-research-600 font-medium">Lab Director</p>
              <p className="mt-2 text-gray-600">Ph.D. in Robotics, Stanford University</p>
              <p className="mt-1 text-sm text-gray-500">
                Specializing in autonomous systems and human-robot interaction with over 15 years of research experience.
              </p>
            </div>

            {/* Associate Director */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Dr. Marcus Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Dr. Marcus Johnson</h3>
              <p className="text-research-600 font-medium">Associate Director</p>
              <p className="mt-2 text-gray-600">Ph.D. in Aerospace Engineering, MIT</p>
              <p className="mt-1 text-sm text-gray-500">
                Leading our space engineering initiatives with expertise in orbital mechanics and spacecraft design.
              </p>
            </div>

            {/* Administrative Director */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Dr. Sarah Williams"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Dr. Sarah Williams</h3>
              <p className="text-research-600 font-medium">Administrative Director</p>
              <p className="mt-2 text-gray-600">Ph.D. in Computer Science, UC Berkeley</p>
              <p className="mt-1 text-sm text-gray-500">
                Overseeing research operations and strategic partnerships with industry and government agencies.
              </p>
            </div>
          </div>
        </div>

        {/* Faculty Researchers */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Faculty Researchers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-4 text-center">
                <img
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 10}.jpg`}
                  alt={`Faculty Researcher ${i + 1}`}
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                />
                <h3 className="text-lg font-semibold">Dr. {['Alex', 'Jamie', 'Taylor', 'Morgan', 'Casey', 'Jordan', 'Riley', 'Quinn'][i]} {['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'][i]}</h3>
                <p className="text-sm text-research-600">
                  {['Associate Professor', 'Senior Researcher', 'Assistant Professor', 'Research Scientist', 'Visiting Professor', 'Research Lead', 'Principal Investigator', 'Faculty Fellow'][i]}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {['Robotics', 'Space Engineering', 'AI & Machine Learning', 'Computer Vision', 'Human-Robot Interaction', 'Aerospace Systems', 'Control Systems', 'Mechanical Design'][i]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Assistants and Students */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Assistants & Students</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <img
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 30}.jpg`}
                    alt={`Student ${i + 1}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">
                      {['Michael', 'Emma', 'Noah', 'Olivia', 'William', 'Ava', 'James', 'Sophia', 'Benjamin', 'Isabella', 'Lucas', 'Mia'][i]} {['Davis', 'Wilson', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Moore', 'Allen', 'Young'][i]}
                    </p>
                    <p className="text-sm text-gray-500">
                      {i < 6 ? 'Ph.D. Student' : 'Master\'s Student'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="mt-16 bg-research-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're always looking for talented researchers and students who are passionate about robotics, space engineering, and interdisciplinary science.
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-research-600 hover:bg-research-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-research-500">
              View Opportunities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
