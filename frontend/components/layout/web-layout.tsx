import { ReactNode } from "react"
import { BaseLayout } from "@/components/layout/base-layout"

export function WebLayout({ children }: { children: ReactNode }) {
  return (
    <BaseLayout>{children}</BaseLayout>
  )
}