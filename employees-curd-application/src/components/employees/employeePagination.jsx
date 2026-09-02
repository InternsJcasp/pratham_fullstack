import Button from "../common/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EmployeePagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3 sm:px-6 rounded-b-xl">
      <div className="flex flex-1 justify-between sm:hidden">
        <Button
          variant="secondary"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <Button
          variant="secondary"
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>

      {/* Desktop view: Page numbers and detailed navigation */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-600">
            Page{" "}
            <span className="font-semibold text-slate-900">{currentPage}</span>{" "}
            of{" "}
            <span className="font-semibold text-slate-900">{totalPages}</span>
          </p>
        </div>

        <nav
          className="inline-flex items-center gap-1.5"
          aria-label="Pagination"
        >
          {/* Previous Button */}
          <Button
            variant="secondary"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ChevronLeft className="size-5" />
            Previous
          </Button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1 mx-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => onPageChange(page)}
                  className={`w-9 h-9 p-0 rounded-lg text-sm ${
                    currentPage === page ? "pointer-events-none" : ""
                  }`}
                >
                  {page}
                </Button>
              ),
            )}
          </div>

          {/* Next Button */}
          <Button
            variant="secondary"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
            <ChevronRight className="size-5" />
          </Button>
        </nav>
      </div>
    </div>
  );
}
