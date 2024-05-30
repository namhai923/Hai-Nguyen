"use client"

import React from "react"
import Link from "next/link"

import { AnimatePresence, motion } from "framer-motion"
import { User, BriefcaseBusiness, Computer, PhoneCall } from "lucide-react"
import slug from "slug"

import { LampContainer } from "./ui/lamp"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"

export function HomePage() {
  let navLabel = [
    { title: "About", icon: <User strokeWidth={2} width={48} height={48} /> },
    {
      title: "Experience",
      icon: <BriefcaseBusiness strokeWidth={2} width={48} height={48} />,
    },
    {
      title: "Works",
      icon: <Computer strokeWidth={2} width={48} height={48} />,
    },
    {
      title: "Contact",
      icon: <PhoneCall strokeWidth={2} width={48} height={48} />,
    },
  ]
  return (
    <LampContainer>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Hai Nguyen
        <div className="text-xl md:text-3xl lg:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          An Enthusiast Web Developer
        </div>
        <div className="py-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {navLabel.map((item, index) => (
            <Link key={index} href={slug(item.title)}>
              <Card title={item.title} icon={item.icon}>
                <CanvasRevealEffect
                  animationSpeed={2.5}
                  containerClassName="bg-[#f0b529]"
                  colors={[[1, 11, 19]]}
                />
              </Card>
            </Link>
          ))}
        </div>
      </motion.div>
    </LampContainer>
  )
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string
  icon: React.ReactNode
  children?: React.ReactNode
}) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-16 relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 translate-y-4">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-10 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  )
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
