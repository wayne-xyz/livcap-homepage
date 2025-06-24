"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <Sun className="h-6 w-6 dark:hidden" />
      <Moon className="h-6 w-6 hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
} 