import "@/styles/globals.css"
import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { ThemeProvider } from "@/components/theme-provider"
import { HeroHighlight } from "@/components/ui/hero-highlight"
import PageTransitionEffect from "@/components/page-transition-effect"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeroHighlight containerClassName="min-h-screen h-full">
            <PageTransitionEffect>{children}</PageTransitionEffect>
          </HeroHighlight>
        </ThemeProvider>
      </body>
    </html>
  )
}
