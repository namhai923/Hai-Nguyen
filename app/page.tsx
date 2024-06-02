import { HomePage } from "@/components/home-page"

import { navLabel, pageTitle } from "@/data/home-page-data"

export default function Home() {
  return <HomePage navLabel={navLabel} pageTitle={pageTitle} />
}
