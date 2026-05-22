import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers"

export default getRequestConfig(async () => {
  const store = await cookies()
  const locale = store.get("__next_locale")?.value || "en"

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
