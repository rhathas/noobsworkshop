export const Introduction = () => {
  return (
    <div
      className={`
        bg-card w-full flex-col rounded px-8 py-4 text-gray-300
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
  )
}
