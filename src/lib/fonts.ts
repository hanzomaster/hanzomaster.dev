import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import localFont from "next/font/local"

export const fontSans = GeistSans
export const fontMono = GeistMono
export const fontPixelSquare = localFont({
  src: "../assets/fonts/DepartureMono-Regular.woff2",
  variable: "--font-geist-pixel-square",
  display: "swap",
})
