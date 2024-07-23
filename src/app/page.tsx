"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24">
      {/* <div className="flex flex-col gap-5 items-center justify-center mt-20 "> */}
      <h1 className="text-8xl font-black tracking-tight">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-teal-700 via-teal-500 to-teal-700 bg-clip-text text-transparent">
          ZenTasks
        </span>
      </h1>
      <h2 className="mt-5 text-3xl">
        Balance your Your Tasks with{" "}
        <span className="font-bold text-teal-500">Ease</span> and{" "}
        <span className="font-bold text-teal-500">Serenity</span>
      </h2>
      <Link href="/webapp">
        <button
          type="button"
          className="mb-2 rounded-full bg-teal-700 px-5 py-2.5 text-center text-2xl font-medium text-white hover:bg-teal-800"
        >
          Start now
        </button>
      </Link>
      <Link href="/login">
        <button
          type="button"
          className="mb-2 me-2 rounded-full bg-teal-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-teal-800"
        >
          TEMPORARY login
        </button>
      </Link>
    </main>
  );
}
