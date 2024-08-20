import { Careers } from "@/app/_components/resume/Careers"
import { Languages } from "@/app/_components/resume/Languages"
import { Skills } from "@/app/_components/home/Skills"
import { ResumeFooter } from "@/app/_components/resume/ResumeFooter"
import DownloadIcon from "@/statics/icons/download.svg"
import Link from "next/link"
import ContactInfo from "@/app/_components/resume/ContactInfo"
export default function Resume() {
  return (
    <main className="mt-2 flex min-h-screen flex-col gap-2">
      <div
        id={"top"}
        className={`
          flex flex-col-reverse gap-2
          lg:flex-row
        `}
      >
        <div
          id={"top-info"}
          className={`
            flex w-full flex-col gap-2
            lg:flex-row
          `}
        >
          <div
            id={"top-name-job"}
            className={`
              rounded bg-card p-4
              lg:grow
            `}
          >
            <h1 className={"text-4xl font-semibold"}>Ogulcan Gündüz</h1>
            <p className={"pt-2 text-2xl font-medium text-primary"}>
              Web <span className={"text-secondary"}>&</span> Mobile Developer
            </p>
          </div>
          <ContactInfo />
        </div>
        <Link
          href={"/pdf/OgulcanGündüz-resume-en.pdf"}
          id="download-resume-en"
          className={`
            flex cursor-pointer flex-row items-center justify-center gap-2 rounded bg-card p-4
            lg:flex-col
          `}
          locale={false}
          download
        >
          <p
            className={`
              text-xl font-bold text-secondary
              lg:text-center
            `}
          >
            Download PDF
          </p>
          <DownloadIcon className={"-mt-1 size-8 fill-secondary"} />
        </Link>
      </div>
      <Careers />
      <Skills />
      <Languages />
      <ResumeFooter />
    </main>
  )
}
