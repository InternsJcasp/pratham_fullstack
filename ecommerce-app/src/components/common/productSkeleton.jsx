import { Skeleton } from "./Skeleton";

export default function ProductSkeleton() {
  return (
    <div className="border p-4 shadow-lg dark:border-gray-700">
      {/* Image */}
      <Skeleton className="h-48 w-full" />

      {/* Title */}
      <Skeleton className="mt-4 h-6 w-3/4" />

      {/* Price */}
      <Skeleton className="mt-3 h-5 w-1/4" />

      {/* Rating */}
      <Skeleton className="mt-2 h-4 w-1/3" />

      {/* Button */}
      <Skeleton className="mt-4 h-10 w-28" />
    </div>
  );
}
