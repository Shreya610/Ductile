"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import LandingPage from "./pages/LandingPage";

export default function Home() {
  const pathname = usePathname();

  return (
    <>
      <LandingPage />
    </>
  );
}
