"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-6 text-center text-slate-800">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Something went wrong!</h2>
        <p className="text-sm text-slate-600 mb-6 font-mono bg-slate-100 p-3 rounded-lg max-w-md">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
