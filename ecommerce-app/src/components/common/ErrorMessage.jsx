function ErrorComponent({ message = "Something went wrong!" }) {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="rounded-lg bg-red-50 p-6 text-center dark:bg-red-950">
        <h2 className="text-xl font-bold text-red-600 dark:text-red-400">
          Error
        </h2>

        <p className="mt-2 text-gray-700 dark:text-gray-300">{message}</p>
      </div>
    </div>
  );
}

export default ErrorComponent;
