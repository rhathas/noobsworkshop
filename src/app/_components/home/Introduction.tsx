import Portrait from "@/statics/noobswp-portrait-1080.svg"

export const Introduction = () => {
  return (
    <div
      className={`
        flex w-full grow flex-col rounded bg-card px-8 py-4 text-gray-300
        lg:flex lg:flex-row
      `}
    >
      <div
        className={`
          -mx-6 hidden min-w-64
          lg:block
        `}
      >
        <Portrait width={"unset"} height={"unset"} className={`w-full`} />
      </div>
      <div
        className={`
          flex-col rounded bg-card px-8 py-4 text-gray-300
          lg:flex
        `}
      >
        <h1 className={"py-2 text-6xl font-semibold"}>
          Hi<span className={"text-gray-400"}>,</span> I&apos;m <span className={"text-primary"}>Ogulcan</span>
          <span className={"text-gray-400"}>.</span>
        </h1>
        <p className={"pt-4 text-3xl font-semibold"}>
          <span className={"text-primary"}>
            Web <span className={"text-secondary"}>&</span> Mobile Developer
          </span>{" "}
          from <span className={"text-gray-100"}>Germany</span>
          {/*<span className={"text-gray-400"}>.</span>*/}
        </p>
        <p className={"mt-2 py-2 text-xl"}>
          specializing in backend and frontend web technologies, e-commerce, PIM, UI/UX as well as mobile development.
        </p>
        <p className={"py-4 text-xl"}>
          Let&apos;s connect and explore how I can bring my experience and passion for technology to your next project!
        </p>
      </div>
    </div>
  )
}
