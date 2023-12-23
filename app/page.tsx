import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Next.js + TypeScript</h1>
      <Link href="/about">
        practice
      </Link>
    </main>
  )
}
