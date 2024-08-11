"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../devTools/Hero/BackgroundCircles";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello World",
      "Hi, My name is Ivan Kelava",
      "I am fullstack software developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section id="hero" className="snap-center">
      <div className="hero">
        <BackgroundCircles />
        <Image
          className="relative rounded-full mx-auto object-cover w-32 h-32"
          src="/avatars/avatar2.png"
          width={128}
          height={128}
          priority={true}
          alt="avatar"
        />
        <div className="z-[1]">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            Software Engineer
          </h2>
          <h1 className="text-4xl">
            <span>{text}</span>
            <Cursor />
          </h1>
        </div>
        <div className="z-[2]">
          <Link href="#about">
            <button className="btn">About</button>
          </Link>
          <Link href="#experience">
            <button className="btn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="btn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="btn">Projects</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
