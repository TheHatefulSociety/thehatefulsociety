import type { NextPage } from "next";
import Link from "next/link";

const Error404: NextPage = () => {
  return (
    <div className="px-0 py-8 mix-blend-difference dark:mix-blend-difference">
      <main className="flex flex-col items-center text-center justify-center flex-grow min-h-screen p-8 space-y-10">
        <p className="text-white dark:text-white text-3xl">
          Can&apos;t find something that hasn&apos;t been built yet.
        </p>

        <h2 className="text-white dark:text-white text-2xl hover:underline decoration-3 underline-offset-8">
          <Link href="/">The Hateful Society</Link>
        </h2>
      </main>
    </div>
  );
};

export default Error404;
