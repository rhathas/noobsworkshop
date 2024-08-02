import Link from "next/link"

export const CTAButtons = () => {
  return (
    <div
      className={`
        mt-4 flex w-full flex-row gap-2 px-4
        lg:px-8
      `}
    >
      <Link
        href={"/blog"}
        className={`
          flex w-1/2 max-w-2xl items-center justify-center rounded bg-secondary px-6 py-4 transition-all duration-200
          ease-in-out
          active:bg-primary
          focus:bg-primary
          hover:bg-primary
        `}
      >
        <p className={"text-center text-xl font-bold"}>Read My Blog</p>
      </Link>
      <Link
        href={"/resume"}
        className={`
          flex w-1/2 max-w-2xl grow items-center justify-center rounded bg-secondary p-4 transition-all duration-200
          ease-in-out
          active:bg-primary
          focus:bg-primary
          hover:bg-primary
        `}
      >
        <p className={"text-center text-xl font-bold"}>Check My Resume</p>
      </Link>
    </div>
  )
}
