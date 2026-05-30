import { MenuMobi } from "@/components/menu-mobi"
import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeSwitcher } from "@/components/theme-switcher"

export function Header() {
  return (
    <header className="flex h-14 border-b md:h-16">
      <HeaderPc />
      <HeaderMobi />
    </header>
  )
}

function HeaderMobi() {
  return (
    <div className="flex flex-1 items-center justify-between px-4 md:hidden">
      <Link href="/" className="text-xl font-black italic">
        VIFC
      </Link>
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
        <MenuMobi />
      </div>
    </div>
  )
}

function HeaderPc() {
  return (
    <div className="hidden flex-1 items-center justify-between px-4 md:flex">
      <Link href="/" className="text-3xl font-black italic">
        VIFC
      </Link>
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  )
}