"use client"
import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "../icons"
import { cn } from "@/app/lib/utils"

type ThemeSwitcherProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  console.log("theme", theme)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        aria-label="Switch theme"
        className={cn("relative", className)}
      >
        <Sun
          aria-hidden="true"
          className="size-5 rotate-0 scale-100 transition-all"
        />
        <Moon
          aria-hidden="true"
          className="absolute size-5 rotate-90 scale-0 transition-all"
        />
      </button>
    )
  }

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className={cn("relative", className)}
    >
      {theme === "dark" ? (
        <Sun
          aria-hidden="true"
          className="size-5 rotate-0 scale-100 transition-all "
        />
      ) : (
        <Moon
          aria-hidden="true"
          className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 "
          fill="currentColor"
        />
      )}
    </button>
  )
}
