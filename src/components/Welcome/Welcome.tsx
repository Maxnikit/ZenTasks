import Link from "next/link";

export function Welcome() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-20 ">
      <h1 className="text-8xl tracking-tight font-black">
        Welcome to{" "}
        <span className=" bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text  text-transparent">
          ZenTasks
        </span>
      </h1>
      <h2 className="mt-5 text-3xl">
        Balance your Your Tasks with Ease and Serenity
      </h2>
      <Link href="/webapp">
        <button className="px-6 rounded ">Start now</button>
      </Link>
      <Link href="/login">
        <button className="px-6 rounded ">TEMPORARY Login</button>
      </Link>
    </div>
  );
}
