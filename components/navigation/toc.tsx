"use client"

import clsx from "clsx"
import Link from "next/link"

import { ScrollArea } from "@/components/ui/scroll-area"

type TocProps = {
  tocs: { href: string; level: number; text: string; cleanText: string }[]
}

export default function Toc({ tocs }: TocProps) {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const id = href.startsWith("#") ? href.slice(1) : href
    const targetElement = document.getElementById(id)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", href)
    }
  }

  if (!tocs.length) {
    return null
  }

  // Find the minimum heading level to establish the base size
  const minLevel = Math.min(...tocs.map(toc => toc.level))
  
  // Function to get text size based on relative level
  const getTextSize = (level: number) => {
    const relativeLevel = level - minLevel
    switch (relativeLevel) {
      case 0: return "text-sm font-medium" // Base level (largest)
      case 1: return "text-xs font-normal" // One level down
      case 2: return "text-xs font-light" // Two levels down
      default: return "text-xs font-light" // Three+ levels down
    }
  }
  
  // Function to get padding based on relative level
  const getPadding = (level: number) => {
    const relativeLevel = level - minLevel
    switch (relativeLevel) {
      case 0: return "pl-0"
      case 1: return "pl-3"
      case 2: return "pl-6"
      default: return "pl-9"
    }
  }
  
  // Function to get max width based on relative level
  const getMaxWidth = (level: number) => {
    const relativeLevel = level - minLevel
    switch (relativeLevel) {
      case 0: return "max-w-full"
      case 1: return "max-w-[190px]"
      case 2: return "max-w-[170px]"
      default: return "max-w-[150px]"
    }
  }

  return (
    <div className="flex w-full max-w-[230px] flex-col gap-3 pl-2">
      <h3 className="text-sm font-semibold">On this page</h3>
      <ScrollArea className="pt-0.5 pb-4">
        <div className="flex flex-col gap-2.5 text-neutral-800 dark:text-neutral-300/85">
          {tocs.map(({ href, level, cleanText }) => (
            <Link
              key={href}
              href={href}
              scroll={false}
              onClick={(e) => handleSmoothScroll(e, href)}
              className={clsx(
                "block break-words hyphens-auto leading-relaxed hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors duration-200 overflow-hidden",
                getTextSize(level),
                getPadding(level),
                getMaxWidth(level)
              )}
              style={{ 
                wordBreak: "break-word", 
                overflowWrap: "anywhere",
                lineBreak: "anywhere"
              }}
            >
              <span className="inline-block w-full">{cleanText}</span>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
