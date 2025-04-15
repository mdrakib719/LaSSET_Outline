
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="text-6xl font-extrabold text-research-600">404</h2>
          <h1 className="mt-6 text-3xl font-bold text-gray-900">Page Not Found</h1>
          <p className="mt-4 text-lg text-gray-500">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <div className="max-w-xs">
            <svg
              className="w-full"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="80" fill="#E1EFFE" />
              <path
                d="M138.5 76.5L89.5 125.5M89.5 76.5L138.5 125.5"
                stroke="#1E429F"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="114" cy="101" r="50" stroke="#1E429F" strokeWidth="6" />
            </svg>
          </div>
          <div className="mt-10">
            <Link to="/">
              <Button size="lg" className="bg-research-600 hover:bg-research-700">
                Go back home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
