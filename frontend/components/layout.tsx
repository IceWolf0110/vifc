import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { ReactNode } from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { CookiesProvider } from "next-client-cookies/server"
import { Header } from "@/components/header"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

async function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <NextIntlClientProvider>
            <CookiesProvider>{children}</CookiesProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export function AuthLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>
}

export function WebLayout({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col justify-between">
        <Header />
        <div className="flex-1 pt-4 md:pt-5">{children}</div>
      </main>
    </Layout>
  )
}