import languagesData from "@/data/resume/languages.json"
import { LanguageItem } from "@/app/_components/resume/LanguageItem"

export const Languages = () => {
  return (
    <div>
      <h2 className={"my-2 px-4 text-xl font-semibold text-gray-400"}>CAREER HISTORY</h2>
      <div className={"flex flex-col gap-2 rounded bg-card p-4"}>
        {languagesData &&
          languagesData.length > 0 &&
          languagesData.map((language) => (
            <LanguageItem label={language.label} level={language.level} key={"language-" + language.label} />
          ))}
      </div>
    </div>
  )
}
