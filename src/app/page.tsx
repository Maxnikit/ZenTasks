"use client";
import Image from "next/image";
import Link from "next/link";
import { decrement, increment } from "@/lib/features/todos/todosSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24">
      {/* <div className="flex flex-col gap-5 items-center justify-center mt-20 "> */}
      <h1 className="text-8xl tracking-tight font-black">
        Welcome to{" "}
        <span className=" bg-gradient-to-r from-teal-700 via-teal-500 to-teal-700 bg-clip-text  text-transparent">
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
          className="text-white bg-teal-700 hover:bg-teal-800   font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Start now
        </button>
      </Link>
      <Link href="/login">
        <button
          type="button"
          className="text-white bg-teal-700 hover:bg-teal-800   font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          TEMPORARY login
        </button>
      </Link>
      <div className="flex flex-row gap-5">
        {" "}
        <button onClick={() => dispatch(increment())} type="button">
          +
        </button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())} type="button">
          -
        </button>
      </div>

      {/* </div> */}
    </main>
  );
}
