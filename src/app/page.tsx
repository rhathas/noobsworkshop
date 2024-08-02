import { Skills } from "@/app/_components/home/Skills"
import { Introduction } from "@/app/_components/home/Introduction"
import { CTAButtons } from "@/app/_components/home/CTAButtons"
import { LatestPosts } from "@/app/_components/home/LatestPosts"

export default function Home() {
  return (
    <main className="mt-2 flex min-h-screen flex-col gap-2">
      <Introduction />
      <CTAButtons />
      <Skills />
      <LatestPosts />
    </main>
  )
}
