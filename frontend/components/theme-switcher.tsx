"use client"

import * as React from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return

  return (
    <Select value={theme} onValueChange={(value) => value && setTheme(value)}>
      <SelectTrigger
        className="flex h-8 w-8 items-center justify-center rounded-full border-0 bg-transparent dark:bg-transparent"
        render={
          <Button variant="ghost" size="icon">
            {theme === "system" ? (
              <Monitor className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <>
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              </>
            )}
          </Button>
        }
      />
      <SelectContent
        sideOffset={isMobile ? 14 : 18}
        alignItemWithTrigger={false}
      >
        <SelectItem value="light" className="p-2">
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            Light
          </div>
        </SelectItem>
        <SelectItem value="dark" className="p-2">
          <div className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            Dark
          </div>
        </SelectItem>
        <SelectItem value="system" className="p-2">
          <div className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            System
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
