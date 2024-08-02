import Link from "next/link"

type PaginationProps = {
  currentPage: number
  totalPages: number
}

const MAX_ITEMS = 5

const getPageNumbers = (currentPage: number, totalPages: number) => {
  if (totalPages <= MAX_ITEMS) {
    return Array.from({ length: totalPages }).map((_, i) => i + 1)
  }
  const pageNumbers = []
  const halfMaxPagesToShow = Math.floor(MAX_ITEMS / 2)

  let startPage = Math.max(1, currentPage - halfMaxPagesToShow)
  let endPage = Math.min(totalPages, currentPage + halfMaxPagesToShow)

  if (currentPage <= halfMaxPagesToShow) {
    endPage = Math.min(totalPages, MAX_ITEMS)
  }
  if (currentPage + halfMaxPagesToShow >= totalPages) {
    startPage = Math.max(1, totalPages - MAX_ITEMS + 1)
  }

  for (let i = startPage + 1; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  return pageNumbers
}

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const pageNumbers = getPageNumbers(currentPage, totalPages)
  return (
    <div className={"my-2 flex w-full flex-row items-center justify-center gap-2"}>
      {currentPage > MAX_ITEMS / 2 && (
        <>
          <Link
            href={`/blog/1`}
            className={`
              bg-card flex aspect-square size-12 items-center justify-center rounded-full p-4 text-lg font-medium
              lg:size-16
            `}
          >
            1
          </Link>
          {currentPage > Math.ceil(MAX_ITEMS / 2) && (
            <p className={"text-lg font-bold text-zinc-400"}>&middot;&middot;&middot;</p>
          )}
        </>
      )}

      {pageNumbers.map((pageNumber) =>
        currentPage == pageNumber ? (
          <p
            key={`pagination-item-${pageNumber}`}
            className={`
              flex aspect-square size-6 items-center justify-center rounded-full p-1 text-lg font-medium
              lg:size-8
            `}
          >
            {pageNumber}
          </p>
        ) : (
          <Link
            href={`/blog/${pageNumber}`}
            key={`pagination-item-${pageNumber}`}
            className={`
              bg-card flex aspect-square size-12 items-center justify-center rounded-full p-4 text-lg font-medium
              lg:size-16
            `}
          >
            {pageNumber}
          </Link>
        ),
      )}
      {currentPage < totalPages - MAX_ITEMS / 2 && (
        <>
          {currentPage < totalPages - Math.ceil(MAX_ITEMS / 2) && (
            <p className={"text-lg font-bold text-zinc-400"}>&middot;&middot;&middot;</p>
          )}
          <Link
            href={`/blog/${totalPages}`}
            className={`
              bg-card flex aspect-square size-12 items-center justify-center rounded-full p-4 text-lg font-medium
              lg:size-16
            `}
          >
            {totalPages}
          </Link>
        </>
      )}
    </div>
  )
}
