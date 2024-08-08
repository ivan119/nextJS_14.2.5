import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return resolvedTheme === "dark" ? (
    <FiSun className="cursor-pointer" onClick={() => setTheme("light")} />
  ) : (
    <FiMoon
      className="cursor-pointer text-gray-900"
      onClick={() => setTheme("dark")}
    />
  );
}
