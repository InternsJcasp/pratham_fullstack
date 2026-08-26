export function Error({ error }) {
  return (
    <main className="flex-1 p-6 bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl border border-red-200 text-center max-w-md">
        <p className="text-red-600 font-semibold mb-2">Error Loading Data</p>
        <p className="text-slate-500 text-sm mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Retry Connection
        </button>
      </div>
    </main>
  );
}
