import Link from "next/link";

export default function Page() {
    return <section className="flex items-center flex-col justify-center h-screen space-y-4">
      <h1 className="text-2xl text-green-500">Hello, Page Two!</h1>
      <div className="text-4xl py-2"> Hello from here</div> 
      <Link href="/" className="text-2xl text-yellow-500">COME HOME</Link>
    </section>
  }