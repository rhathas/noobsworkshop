import skills from "@/data/resume/skills.json"

export const Skills = () => {
  return (
    <div
      className={`
        w-full p-4
        lg:px-8
      `}
    >
      <h2 className={"py-2 text-2xl font-semibold text-gray-400"}>Skills:</h2>
      <div className={"flex w-full flex-row flex-wrap gap-2"}>
        {skills.map((skill) => (
          <div className={"bg-card rounded px-4 py-2"} key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}
