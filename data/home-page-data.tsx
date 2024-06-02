import { User, BriefcaseBusiness, Computer, PhoneCall } from "lucide-react"

export const pageTitle = {
  mainTitle: "Hai Nguyen",
  subTitle: "An Enthusiastic Web Developer",
}

export const navLabel = [
  {
    title: "About",
    icon: (
      <User
        strokeWidth={2}
        width={48}
        height={48}
        className="text-neutral-300"
      />
    ),
  },
  {
    title: "Experience",
    icon: (
      <BriefcaseBusiness
        strokeWidth={2}
        width={48}
        height={48}
        className="text-neutral-300"
      />
    ),
  },
  {
    title: "Works",
    icon: (
      <Computer
        strokeWidth={2}
        width={48}
        height={48}
        className="text-neutral-300"
      />
    ),
  },
  {
    title: "Contact",
    icon: (
      <PhoneCall
        strokeWidth={2}
        width={48}
        height={48}
        className="text-neutral-300"
      />
    ),
  },
]
