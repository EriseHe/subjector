import { Link } from "lib/transition"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold sm:text-7xl">Topo-book</h1>
      <p className="text-foreground mb-8 max-w-[600px] sm:text-base">
        A collection of notes on Lacanian psychoanalysis, geometric deep
        learning, and Subjector, which is a geometric learning prototype
        framework based on artificial lack-driven desire
      </p>

      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Open
        </Link>
      </div>
    </section>
  )
}
