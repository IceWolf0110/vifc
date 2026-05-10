import { useTranslations } from "next-intl"

export default function Page() {
  const t = useTranslations('auth.login')

  return (
    <h1>{t("title")}</h1>
  )
}