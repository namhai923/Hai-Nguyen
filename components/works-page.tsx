import React from "react"
import Image from "next/image"
import Link from "next/link"

import {
  IconPhoto,
  IconBackground,
  IconTopologyStar3,
} from "@tabler/icons-react"
import slug from "slug"

import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { SparklesCore } from "./ui/sparkles"

import bbc from "@/public/bison-bank-of-canada.png"
import portfolioTemplate from "@/public/portfolio-template.png"
import blogTemplate from "@/public/blog-template.png"

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

const BisonIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      version="1.1"
    >
      <g id="surface1">
        <path
          stroke="none"
          fillRule="nonzero"
          fill="#ffffff"
          fillOpacity="0.5"
          d="M 9.359375 2.398438 C 8.722656 2.496094 8.210938 2.753906 7.683594 3.230469 C 7.382812 3.507812 7.128906 3.664062 6.796875 3.773438 L 6.546875 3.855469 L 4.953125 3.875 C 3.449219 3.894531 3.347656 3.898438 3.140625 3.960938 C 2.660156 4.105469 2.308594 4.3125 2.007812 4.628906 C 1.90625 4.738281 1.417969 5.234375 0.929688 5.734375 C -0.03125 6.710938 -0.0390625 6.714844 0.0117188 6.984375 C 0.0429688 7.136719 0.234375 7.332031 0.382812 7.359375 C 0.601562 7.398438 0.707031 7.355469 0.972656 7.101562 C 1.257812 6.828125 1.257812 6.824219 1.15625 7.359375 C 1.023438 8.042969 0.6875 8.796875 0.261719 9.363281 C 0.128906 9.542969 0.0234375 9.714844 0.0117188 9.78125 C -0.00390625 9.859375 0.0859375 10.316406 0.375 11.5625 C 0.585938 12.480469 0.773438 13.277344 0.796875 13.332031 C 0.820312 13.382812 0.890625 13.46875 0.957031 13.519531 L 1.070312 13.609375 L 1.628906 13.609375 C 2.238281 13.609375 2.265625 13.601562 2.417969 13.394531 C 2.507812 13.273438 2.507812 12.976562 2.417969 12.855469 C 2.289062 12.683594 2.203125 12.644531 1.914062 12.625 L 1.644531 12.609375 L 1.34375 11.304688 L 1.042969 10.003906 L 1.222656 9.742188 C 1.855469 8.820312 2.246094 7.589844 2.25 6.5 C 2.25 6.230469 2.3125 5.929688 2.410156 5.742188 C 2.5 5.5625 2.917969 5.136719 3.101562 5.042969 C 3.40625 4.886719 3.535156 4.875 4.992188 4.875 C 6.425781 4.875 6.664062 4.859375 7.078125 4.726562 C 7.558594 4.574219 7.9375 4.351562 8.375 3.957031 C 9.054688 3.335938 9.84375 3.210938 10.625 3.597656 C 10.867188 3.714844 10.945312 3.78125 11.457031 4.289062 C 11.996094 4.820312 12.023438 4.851562 12.042969 4.992188 C 12.054688 5.070312 12.117188 5.253906 12.1875 5.394531 C 12.46875 5.976562 13.054688 6.351562 13.679688 6.355469 C 13.953125 6.359375 14.035156 6.324219 14.167969 6.144531 C 14.257812 6.023438 14.257812 5.726562 14.167969 5.605469 C 14.058594 5.460938 13.957031 5.402344 13.742188 5.375 C 13.632812 5.363281 13.492188 5.328125 13.429688 5.296875 C 13.300781 5.238281 13.109375 5.039062 13.054688 4.914062 C 13.027344 4.855469 13.011719 4.511719 13 3.882812 C 12.984375 2.992188 12.980469 2.9375 12.917969 2.855469 C 12.796875 2.691406 12.695312 2.640625 12.5 2.640625 C 12.363281 2.640625 12.292969 2.65625 12.230469 2.707031 C 12.0625 2.832031 12.019531 2.925781 12.007812 3.175781 L 11.992188 3.410156 L 11.785156 3.210938 C 11.226562 2.675781 10.589844 2.40625 9.828125 2.390625 C 9.621094 2.382812 9.414062 2.386719 9.359375 2.398438 Z M 9.359375 2.398438 "
        />
        <path
          stroke="none"
          fillRule="nonzero"
          fill="#ffffff"
          fillOpacity="0.5"
          d="M 13.71875 3.910156 C 13.4375 4.027344 13.316406 4.386719 13.476562 4.625 C 13.59375 4.796875 13.6875 4.847656 13.957031 4.878906 C 14.089844 4.898438 14.273438 4.945312 14.367188 4.984375 C 14.578125 5.082031 14.796875 5.304688 14.898438 5.523438 L 14.984375 5.703125 L 14.992188 7.078125 C 15 8.105469 14.992188 8.488281 14.964844 8.59375 C 14.886719 8.871094 14.546875 9.125 14.253906 9.125 C 14.085938 9.125 13.960938 9.203125 13.671875 9.5 C 13.519531 9.65625 13.351562 9.804688 13.304688 9.832031 C 13.148438 9.914062 12.964844 9.867188 12.828125 9.71875 C 12.769531 9.652344 12.765625 9.59375 12.75 8.421875 C 12.734375 7.242188 12.730469 7.1875 12.667969 7.105469 C 12.546875 6.941406 12.445312 6.890625 12.25 6.890625 C 12.054688 6.890625 11.953125 6.941406 11.832031 7.105469 C 11.769531 7.1875 11.765625 7.242188 11.757812 7.941406 L 11.746094 8.6875 L 11.523438 8.871094 C 10.957031 9.339844 10.398438 9.5625 9.636719 9.621094 C 9.289062 9.648438 9.210938 9.679688 9.082031 9.855469 C 8.992188 9.976562 8.992188 10.273438 9.082031 10.394531 C 9.222656 10.585938 9.289062 10.609375 9.660156 10.609375 L 9.996094 10.605469 L 10.007812 11.957031 C 10.015625 13.265625 10.019531 13.308594 10.082031 13.394531 C 10.234375 13.601562 10.261719 13.609375 10.875 13.609375 C 11.488281 13.609375 11.515625 13.601562 11.667969 13.394531 C 11.757812 13.273438 11.757812 12.976562 11.667969 12.855469 C 11.546875 12.691406 11.449219 12.644531 11.21875 12.632812 L 11 12.617188 L 11 10.351562 L 11.242188 10.234375 C 11.375 10.171875 11.550781 10.078125 11.632812 10.027344 C 11.714844 9.976562 11.792969 9.9375 11.804688 9.941406 C 11.820312 9.941406 11.867188 10.023438 11.914062 10.121094 C 12.179688 10.679688 12.863281 10.988281 13.484375 10.824219 C 13.75 10.757812 13.914062 10.652344 14.222656 10.351562 C 14.386719 10.195312 14.511719 10.09375 14.554688 10.09375 C 14.648438 10.09375 14.996094 9.960938 15.164062 9.867188 C 15.371094 9.742188 15.660156 9.441406 15.773438 9.230469 C 15.992188 8.8125 15.984375 8.867188 15.984375 7.140625 L 15.984375 5.578125 L 15.898438 5.328125 C 15.667969 4.679688 15.199219 4.210938 14.574219 3.992188 C 14.285156 3.894531 13.851562 3.851562 13.71875 3.910156 Z M 13.71875 3.910156 "
        />
        <path
          stroke="none"
          fillRule="nonzero"
          fill="#ffffff"
          fillOpacity="0.5"
          d="M 4.546875 7.425781 C 4.382812 7.511719 4.316406 7.597656 4.230469 7.855469 C 4.054688 8.402344 3.871094 8.714844 3.550781 9.058594 C 3.117188 9.511719 2.597656 9.773438 1.890625 9.890625 C 1.804688 9.90625 1.730469 9.945312 1.648438 10.035156 C 1.445312 10.246094 1.449219 10.511719 1.65625 10.71875 C 1.734375 10.796875 1.820312 10.847656 1.898438 10.863281 C 2.054688 10.890625 2.492188 10.804688 2.859375 10.675781 L 3.148438 10.570312 L 3.453125 11.902344 C 3.621094 12.632812 3.773438 13.277344 3.796875 13.332031 C 3.820312 13.382812 3.890625 13.46875 3.957031 13.519531 L 4.070312 13.609375 L 4.628906 13.609375 C 5.238281 13.609375 5.265625 13.601562 5.417969 13.394531 C 5.507812 13.273438 5.507812 12.976562 5.417969 12.855469 C 5.289062 12.683594 5.203125 12.644531 4.914062 12.625 L 4.644531 12.609375 L 4.035156 9.984375 L 4.101562 9.929688 C 4.136719 9.898438 4.1875 9.882812 4.214844 9.890625 C 4.367188 9.949219 5.027344 10.128906 5.3125 10.183594 C 5.886719 10.296875 6.339844 10.347656 7.054688 10.367188 L 7.746094 10.382812 L 7.757812 11.847656 C 7.765625 13.265625 7.769531 13.308594 7.832031 13.394531 C 7.984375 13.601562 8.011719 13.609375 8.625 13.609375 C 9.238281 13.609375 9.265625 13.601562 9.417969 13.394531 C 9.507812 13.273438 9.507812 12.976562 9.417969 12.855469 C 9.296875 12.691406 9.199219 12.644531 8.96875 12.632812 L 8.75 12.617188 L 8.742188 10.40625 C 8.734375 8.226562 8.734375 8.191406 8.667969 8.105469 C 8.546875 7.941406 8.445312 7.890625 8.25 7.890625 C 8.054688 7.890625 7.953125 7.941406 7.832031 8.105469 C 7.773438 8.183594 7.765625 8.242188 7.757812 8.789062 L 7.746094 9.382812 L 7.085938 9.367188 C 6.246094 9.339844 5.5625 9.246094 4.996094 9.082031 L 4.824219 9.03125 L 4.929688 8.820312 C 5.101562 8.46875 5.257812 7.949219 5.242188 7.808594 C 5.195312 7.484375 4.824219 7.277344 4.546875 7.425781 Z M 4.546875 7.425781 "
        />
      </g>
    </svg>
  )
}

export const works = [
  {
    title: "Bison Bank of Canada",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <Image
          priority
          src={bbc}
          alt={"bison-bank-of-canada"}
          className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    className: "md:col-span-2",
    icon: <BisonIcon />,
  },
  {
    title: "Portfolio Webite Template",
    description: "Dive into the transformative power of technology.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <Image
          priority
          src={portfolioTemplate}
          alt={"portfolio-template"}
          className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconPhoto className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Blog Website Template",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <Image
          priority
          src={blogTemplate}
          alt={"blog-template"}
          className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconBackground className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Trust Development for Blockchain Interoperability",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTopologyStar3 className="h-4 w-4 text-neutral-500" />,
  },
]

export function WorksPage() {
  const words =
    "Some of my favorite projects I have worked on over the last few years"
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-[7rem] w-full bg-transprarent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <TextGenerateEffect
          words={words}
          className="text-center mx-auto font-normal text-neutral-600 dark:text-neutral-400"
        />
        <div className="w-[40rem] h-20 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#f0b529"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black/90 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <BentoGrid className="max-w-4xl mx-4 mb-4 md:mx-auto md:auto-rows-[20rem]">
        {works.map((work: any, index: number) => (
          <Link key={index} href={slug(work.title)} className={work.className}>
            <BentoGridItem
              title={work.title}
              description={work.description}
              header={work.header}
              icon={work.icon}
            />
          </Link>
        ))}
      </BentoGrid>
    </div>
  )
}
