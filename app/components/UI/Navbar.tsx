"use client";
import SocialLinks from "../devTools/Navigation/SocialLinks";
type Props = {};
export default function Header({}: Props) {
  return (
    <header className="header">
      <SocialLinks />
    </header>
  );
}
