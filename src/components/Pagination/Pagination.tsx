"use client";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  totalRecords,
  onPageChange,
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">

      {/* ================= PAGE INFO ================= */}

      <div className="pagination-info">
        Page{" "}
        <strong>{currentPage}</strong>{" "}
        of{" "}
        <strong>{totalPages}</strong>
      </div>

      {/* ================= PAGINATION CONTROLS ================= */}

      <div className="pagination-controls">

        {/* PREVIOUS */}

        <button
          type="button"
          className="pagination-button"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* PAGE NUMBERS */}

        <div className="pagination-numbers">

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (

            <button
              type="button"
              key={page}
              className={`pagination-number ${
                currentPage === page
                  ? "active"
                  : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>

          ))}

        </div>

        {/* NEXT */}

        <button
          type="button"
          className="pagination-button"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

      </div>

      {/* ================= TOTAL RECORDS ================= */}

      <div className="pagination-total">
        Total Records:{" "}
        <strong>{totalRecords}</strong>
      </div>

    </div>
  );
}