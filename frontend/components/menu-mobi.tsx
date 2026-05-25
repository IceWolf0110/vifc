import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export function MenuMobi() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="text-center">
          <SheetTitle className="text-5xl font-black italic">
            <Link href="/">
              VIFC
            </Link>
          </SheetTitle>
          <SheetDescription />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
