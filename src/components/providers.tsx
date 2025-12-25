"use client"

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Provider as JotaiProvider } from "jotai";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";

import { TooltipProvider } from "./base/ui/tooltip"
import { Toaster } from "./ui/sonner"

const ProgressProvider = dynamic(
  () =>
    import("@bprogress/next").then((mod) => ({
      default: ({ children }: { children: React.ReactNode }) => (
        <mod.AppProgressProvider
          color="var(--foreground)"
          height="2px"
          delay={500}
          options={{ showSpinner: false }}
        >
          {children}
        </mod.AppProgressProvider>
      ),
    })),
  { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <ThemeProvider
        enableSystem
        disableTransitionOnChange
        enableColorScheme
        storageKey="theme"
        defaultTheme="system"
        attribute="class"
      >
        <ProgressProvider>{children}</ProgressProvider>

        <Toaster position="top-center" />
      </ThemeProvider>
    </JotaiProvider>
  )
}
