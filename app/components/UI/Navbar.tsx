"use client";
import SocialLinks from "../devTools/Navigation/SocialLinks";
import ThemeSwitch from "../devTools/Navigation/ThemeSwitch";
type Props = {};
export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex justify-between items-center p-2 h-12">
      <SocialLinks />
      <ThemeSwitch />
    </header>
  );
}
