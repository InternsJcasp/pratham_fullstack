import { ShieldX } from "lucide-react";
export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="my-6 rounded-xl border border-red-200 bg-red-50 p-6 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
        <ShieldX />
      </div>
      <h3 className="mt-2 font-semibold text-red-800">Something went wrong</h3>
      <p className="mt-1 text-sm text-red-600">
        {message || "Failed to load data."}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 inline-flex items-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
