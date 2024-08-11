import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Page() {
  const { resolvedTheme } = useTheme();
  const [iconColor, setIconColor] = useState("#000000"); // Default color

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setIconColor("#ffffff"); // Change to white in dark mode
    } else {
      setIconColor("#000000"); // Change to black in light mode
    }
  }, [resolvedTheme]);

  return (
    <div>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center space-x-4"
      >
        <Link href="/" className="text-2xl">
          Ivan Kelava
        </Link>
        <SocialIcon
          className="h-8 w-8"
          network="github"
          bgColor="transparent"
          target="_blank"
          fgColor={iconColor}
          url="https://github.com/ivan119"
        />
      </motion.div>
    </div>
  );
}
