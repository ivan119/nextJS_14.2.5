import Link from "next/link";

export default function Page() {
  return (
    <section className="globalWelcome space-y-6">
      <h1 className="text-2xl text-green-800 dark:text-blue-650">
        Hello, Page Two!
      </h1>
      <div className="text-4xl py-2">Hello from here</div>
      <Link href="/" className="text-2xl text-yellow-800">
        COME HOME
      </Link>
    </section>
  );
}
