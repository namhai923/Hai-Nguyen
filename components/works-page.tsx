"use client"

import React from "react"

import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import { TextGenerateEffect } from "./ui/text-generate-effect"

export function WorksPage({ works }: { works: any[] }) {
  const words =
    "Some of my favorite projects I have worked on over the last few years"
  return (
    <div className="p-4 md:p-0 max-w-4xl">
      <TextGenerateEffect
        words={words}
        className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400"
      />
      ;
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {works.map((works: any, index: number) => (
          <BentoGridItem
            key={index}
            title={works.title}
            description={works.description}
            header={works.header}
            icon={works.icon}
            className={works.className}
          />
        ))}
      </BentoGrid>
    </div>
  )
}
