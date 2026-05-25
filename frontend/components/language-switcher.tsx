"use client"

import { useTransition } from "react"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useCookies } from "next-client-cookies"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

const LOCALE_COOKIE = "__next_locale"
type LocaleCode = "en" | "vi"

export function LanguageSwitcher() {
  const currentLocale = useLocale() as LocaleCode
  const t = useTranslations()
  const router = useRouter()
  const cookies = useCookies()
  const [isPending, startTransition] = useTransition()

  const switchLocale = (locale: LocaleCode) => {
    if (locale === currentLocale) return
    cookies.set(LOCALE_COOKIE, locale, { path: "/" })
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <Button
      variant="ghost"
      size="lg"
      disabled={isPending}
      onClick={() => switchLocale(currentLocale === "en" ? "vi" : "en")}
    >
      <Languages />
      {t("locale").toUpperCase()}
    </Button>
  )
}
