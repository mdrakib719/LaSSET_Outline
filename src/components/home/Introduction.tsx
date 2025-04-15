
export function Introduction() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-research-600 font-semibold tracking-wide uppercase">Our mission</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advancing Scientific Frontiers
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500 lg:mx-auto">
            At Frontier Research Lab, we're dedicated to pushing the boundaries of scientific discovery and technological innovation through collaborative research in robotics and space engineering.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="absolute top-0 left-0 -mt-4 -ml-4 h-16 w-16 flex items-center justify-center rounded-full bg-research-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="ml-8 text-xl font-medium text-gray-900">Innovation</h3>
              <p className="mt-4 text-base text-gray-500">
                Developing novel technologies and methodologies to solve complex scientific challenges across disciplines.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="absolute top-0 left-0 -mt-4 -ml-4 h-16 w-16 flex items-center justify-center rounded-full bg-research-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="ml-8 text-xl font-medium text-gray-900">Collaboration</h3>
              <p className="mt-4 text-base text-gray-500">
                Fostering interdisciplinary teamwork between researchers, industry partners, and academic institutions worldwide.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="absolute top-0 left-0 -mt-4 -ml-4 h-16 w-16 flex items-center justify-center rounded-full bg-research-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="ml-8 text-xl font-medium text-gray-900">Impact</h3>
              <p className="mt-4 text-base text-gray-500">
                Creating meaningful solutions to global challenges through research that translates into real-world applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
