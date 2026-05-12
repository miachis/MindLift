import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-md w-full text-center">
        <h1 className="text-7xl font-extrabold text-[#16A34A]">404</h1>

        <p className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </p>

        <p className="mt-2 text-gray-500 text-sm leading-relaxed">
          The page you are looking for doesn't exist.
        </p>

        <button className="mt-6 px-6 py-3 rounded-2xl bg-[#16A34A] text-white font-medium hover:scale-105 transition-transform duration-200">
          <Link to={"/"}>Go Home</Link>
        </button>
      </div>
    </div>
  );
}
