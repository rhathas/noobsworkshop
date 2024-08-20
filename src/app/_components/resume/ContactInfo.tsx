import LocationIcon from "@/statics/icons/location.svg"
import LinkedInIcon from "@/statics/icons/linkedin.svg"
import MobileIcon from "@/statics/icons/mobile.svg"

export default function ContactInfo() {
  return (
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
        <p>
          <a href={"mailto:oogunduz@gmail.com"}>oogunduz@gmail.com</a>
        </p>
      </div>
      <div className={"flex flex-row items-center gap-2"}>
        <LinkedInIcon className={"fill-gray-50"} />
        <p>
          <a href={"http://linkedin.com/in/ogulcangunduz"} target={"_blank"}>
            linkedin.com/in/ogulcangunduz
          </a>
        </p>
      </div>
      <div className={"flex flex-row items-center gap-2"}>
        <MobileIcon className={"fill-gray-50"} />
        <p>
          <a href={"tel:+4915152198279"}>+49 1515 2198279</a>
        </p>
      </div>
    </div>
  )
}
