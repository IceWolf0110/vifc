import { MenuMobi } from "@/components/menu-mobi"
import Link from "next/link"

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
      <MenuMobi />
    </div>
  )
}

function HeaderPc() {
  return (
    <div className="hidden flex-1 items-center justify-between px-4 md:flex">
      <Link href="/" className="text-3xl font-black italic">
        VIFC
      </Link>
    </div>
  )
}