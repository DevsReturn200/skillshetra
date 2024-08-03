// Importing Globals CSS //
import "./globals.css"

// Importing Types //
import type { Metadata } from "next"
import { ChildrenType } from "@/common/types/reactTypes"

// Importing Components //
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"

// Importing Constants //
import { MyMainFont } from "@/common/constants/fonts"
import { generateMetadata } from "@/common/meta/metadata"

// Importing and Exporting MetaData //
export const metadata: Metadata = generateMetadata()

// Exporting Default function for RootLayout
export default async function RootLayout({ children }: { children: ChildrenType }) {
  // Constant Padding for all Components //
  const padding = "px-3 sm:px-6 md:px-14 lg:px-20 xl:px-40 2xl:px-60 3xl:px-80 4xl:px-[500px]"

  // Returning JSX //
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`flex w-full flex-col text-text bg-bg ${MyMainFont.className}`}>
        <Header className={`flex justify-between items-center bg-[#f3f4f6] gap-4 lg:gap-8 ${padding} py-2 select-none`} />
        <main className={padding}>{children}</main>
        <Footer className={`flex flex-col bg-[#f3f4f6] gap-5 ${padding} py-5 select-none`} />
      </body>
    </html>
  )
}