"use client"
import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "../icons"
import { cn } from "@/app/lib/utils"

type ThemeSwitcherProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <button
        aria-label="Switch theme"
        className={cn("relative group", className)}
      >
        <Sun
          aria-hidden="true"
          className="size-5 rotate-0 scale-100 transition-all group-hover:rotate-180"
        />
        <Moon
          aria-hidden="true"
          className="absolute size-5 rotate-90 scale-0 transition-all group-hover:rotate-180"
        />
      </button>
    )
  }

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className={cn("relative group", className)}
    >
      {theme === "dark" ? (
        <Sun
          aria-hidden="true"
          className="size-5 rotate-0 scale-100 transition-transform duration-300 ease-in-out group-hover:rotate-180"
        />
      ) : (
        <Moon
          aria-hidden="true"
          className="size-5 rotate-0 scale-100 transition-transform duration-300 ease-in-out group-hover:rotate-180 "
        />
      )}
    </button>
  )
}
