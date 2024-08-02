import LinkedInIcon from "@/statics/icons/linkedin.svg"
import MobileIcon from "@/statics/icons/mobile.svg"
import LocationIcon from "@/statics/icons/location.svg"
import { Careers } from "@/app/_components/resume/Careers"
import { Languages } from "@/app/_components/resume/Languages"
import { Skills } from "@/app/_components/home/Skills"
import { ResumeFooter } from "@/app/_components/resume/ResumeFooter"
import DownloadIcon from "@/statics/icons/download.svg"
import Link from "next/link"
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
              {/*<span className={"text-gray-300"}>*/}
              Web <span className={"text-secondary"}>&</span> Mobile Developer
            </p>
          </div>
          <div
            id={"top-contact"}
            className={`
              flex flex-col gap-1 rounded bg-card p-4
              lg:grow
            `}
          >
            <div className={"flex flex-row items-center gap-2"}>
              <LocationIcon className={"fill-gray-50"} />
              <p>Haltern am See, NRW, Germany</p>
            </div>
            <div className={"flex flex-row items-center gap-2"}>
              <p className={"font-bold"}>@</p>
              <p>oogunduz@gmail.com</p>
            </div>
            <div className={"flex flex-row items-center gap-2"}>
              <LinkedInIcon className={"fill-gray-50"} />
              <p>linkedin.com/in/ogulcangunduz</p>
            </div>
            <div className={"flex flex-row items-center gap-2"}>
              <MobileIcon className={"fill-gray-50"} />
              <p>+49 1515 2198279</p>
            </div>
          </div>
        </div>
        <Link
          href={"/pdf/OgulcanGündüz-resume-en.pdf"}
          id="download-resume-en"
          className={`
            flex cursor-pointer flex-row items-center justify-center gap-2 rounded bg-card p-4
            lg:flex-col
          `}
          locale={false}
          // target="_blank"
          // rel="noopener noreferrer"
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
