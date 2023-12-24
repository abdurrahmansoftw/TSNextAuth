import Image from "next/image";

export default async function Home() {
  return <main className="relative h-screen">
    <Image src='https://bit.ly/react-cover'  fill alt='coffer' className="object-cover" sizes="(max-width: 480px), 100vw, (max-width: 768px) 50vw, 33w " quality={75} priority />
  </main>;
}
