"use client"
import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-screen flex-1 scale-y-75 md:scale-y-90 items-center justify-center isolate z-0 md:-translate-y-20">
        <motion.div
          initial={{ opacity: 0.5, width: "var(--width-from)" }}
          whileInView={{ opacity: 1, width: "var(--width-to)" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#f0b529] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] [--width-from:7rem] [--width-to:15rem] md:[--width-from:15rem] md:[--width-to:30rem]"
        >
          <div className="absolute w-[100%] left-0 bg-black/90 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "var(--width-from)" }}
          whileInView={{ opacity: 1, width: "var(--width-to)" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#f0b529] text-white [--conic-position:from_290deg_at_center_top] [--width-from:7rem] [--width-to:15rem] md:[--width-from:15rem] md:[--width-to:30rem]"
        >
          <div className="absolute w-[100%] right-0 bg-black/90 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-transparent blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[14rem] md:w-[28rem] -translate-y-1/2 rounded-full bg-[#f0b529] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "var(--width-from)" }}
          whileInView={{ width: "var(--width-to)" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#f0b529] blur-2xl [--width-from:4rem] [--width-to:8rem] md:[--width-from:8rem] md:[--width-to:16rem]"
        ></motion.div>
        <motion.div
          initial={{ width: "var(--width-from)" }}
          whileInView={{ width: "var(--width-to)" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 -translate-y-[7rem] bg-[#f0b529] [--width-from:7rem] [--width-to:15rem] md:[--width-from:15rem] md:[--width-to:30rem]"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-transparent"></div>
      </div>
      <div className="relative z-50 flex -translate-y-[15rem] md:-translate-y-[23rem] flex-col items-center px-5">
        {children}
      </div>
    </div>
  )
}
