"use client";

import Links from "./links";
import Image from "next/image";
import LanguageSelector from "@/components/ui/language-selector";

export default function NavDesktop() {
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <a href="#hero">
        <h1 className="text-3xl">Snippet</h1>
      </a>
      <div className="flex items-center gap-4">
        <Links />
        {/* <LanguageSelector /> */}
      </div>
    </div>
  );
}
