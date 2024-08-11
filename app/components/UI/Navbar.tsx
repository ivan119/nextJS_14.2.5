"use client";
import SocialLinks from "../devTools/Navigation/SocialLinks";
import ThemeSwitch from "../devTools/Navigation/ThemeSwitch";
type Props = {};
export default function Header({}: Props) {
  return (
    <header className="header">
      <SocialLinks />
      <ThemeSwitch />
    </header>
  );
}
