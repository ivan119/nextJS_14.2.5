import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <Link
          href="/pageTwo"
          className="globalWelcome text-2xl text-yellow-500"
        >
          Welcome
        </Link>
      </div>
    </main>
  );
}
