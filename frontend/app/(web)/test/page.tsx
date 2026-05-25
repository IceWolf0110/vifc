import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslations } from "next-intl"

export default function Page() {
  const t = useTranslations("home")

  return (
    <>
      <h1>{t("test")}</h1>
      <LanguageSwitcher />
    </>
  )
}
