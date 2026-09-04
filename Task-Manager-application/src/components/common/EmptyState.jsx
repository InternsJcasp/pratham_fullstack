const EmptyState = ({
  title = "No tasks found",
  description = "Create your first task to get started.",
}) => {
  return (
    <div className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;
