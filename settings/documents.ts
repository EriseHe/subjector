import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    heading: "Introduction",
    title: "Lacanian Psychoanalysis",
    href: "/lacanian-psychoanalysis",
    items: [
      {
        title: "Reframe",
        href: "/reframe",
      },
      {
        title: "Mirror Stage",
        href: "/mirror-stage",
      },
      {
        title: "Desire",
        href: "/desire",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Geometric Deep Learning",
    href: "/geometric-deep-learning",
    heading: "Architecture",
  },
  {
    title: "Subjector",
    href: "/subjector",
    items: [
      {
        title: "Design",
        href: "/design",
      },
    ],
  },
  {
    spacer: true,
  },
]
