"use client"

import React from "react"
import Link from "next/link"

import {
  IconPhone,
  IconMail,
  IconBrandLinkedin,
  IconSend,
} from "@tabler/icons-react"

import { Input } from "./ui/input"
import { Spotlight } from "./ui/spotlight"
import { Textarea } from "./ui/textarea"

const contactInfos = [
  {
    title: "Telephone nr.",
    icon: <IconPhone className="h-10 w-10 text-neutral-300" />,
    info: "(431)-336-9280",
    href: "",
  },
  {
    title: "E-Mail",
    icon: <IconMail className="h-10 w-10 text-neutral-300" />,
    info: "namhainguyenminh@gmail.com",
    href: "mailto:namhainguyenminh@gmail.com",
  },
  {
    title: "Linkedin",
    icon: <IconBrandLinkedin className="h-10 w-10 text-neutral-300" />,
    info: "linkedin.com/in/akias/",
    href: "https://www.linkedin.com/in/akias/",
  },
]

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full flex flex-col items-center justify-center antialiased overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-1 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <div className="flex-auto border-b-2 lg:border-b-0 lg:border-r-2 border-amber-500 text-center lg:text-right place-content-center pb-4 lg:pb-0 lg:pr-4">
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase">
              contact me
            </h1>
          </div>
          <div className="flex-auto flex justify-center lg:justify-start border-t-2 lg:border-t-0 lg:border-l-2 border-amber-500 pt-4 lg:pt-0 lg:pl-4">
            <div className="space-y-1 xl:space-y-3">
              {contactInfos.map((contact, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-base xl:text-xl"
                >
                  {contact.icon}
                  <p className="ml-4 font-bold text-neutral-300 max-w-lg">
                    {contact.title}
                  </p>
                  <p className="font-normal text-neutral-300 max-w-lg">
                    &ensp;//&ensp;
                  </p>
                  {contact.href === "" ? (
                    <p className="font-extralight text-neutral-300 max-w-lg">
                      {contact.info}
                    </p>
                  ) : (
                    <Link
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="font-extralight text-yellow-500 max-w-lg underline underline-offset-4">
                        {contact.info}
                      </p>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/4 xl:w-2/3">
          <form
            className="my-8 grid grid-cols-1 grid-rows-2 lg:grid-cols-10 gap-4"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="grid row-span-1 lg:col-span-4 gap-4">
              <Input id="name" placeholder="Your Name" type="text" />

              <Input
                id="email"
                placeholder="Your e-mail address"
                type="email"
              />

              <Textarea
                id="subject"
                placeholder="Subject"
                className="resize-none"
              />
            </div>

            <div className="grid lg:col-span-6">
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="resize-none h-full"
              />
            </div>

            <button
              className="lg:col-start-5 lg:col-span-2 flex space-x-2 items-center justify-center bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              <span>Send</span>
              <IconSend className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span
        className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
        style={{ marginLeft: 0 }}
      />

      <span
        className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
        style={{ marginLeft: 0 }}
      />
    </>
  )
}
