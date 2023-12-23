import Link from "next/link";
import UsersPage from "./users/page";

export default function Home() {
  return (
    <main>
      <Link href='/users'>Users</Link>
      <UsersPage />
    </main>
  )
}
