export default function LoadingSpinner() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="size-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
    </div>
  );
}
