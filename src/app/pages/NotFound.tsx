import { Link } from "react-router";
import { AlertCircle } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-brand-950 px-4 text-center">
      <AlertCircle className="mb-4 h-16 w-16 text-brand-500" />
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">Page Not Found</h1>
      <p className="mb-8 text-lg text-brand-300">
        We couldn't find the page you're looking for.
      </p>
      <Link
        to="/"
        className="inline-flex h-12 items-center justify-center rounded-full bg-brand-500 px-8 text-sm font-medium text-white shadow-lg transition-colors hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      >
        Return to Home
      </Link>
    </div>
  );
}
