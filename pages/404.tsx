import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Error404: NextPage = () => {
  return (
    <div className="px-0 py-8">
      <Head>
        <title>The Hateful Society</title>
        <meta name="description" content="The Hateful Society" />
        <link rel="icon" href="/ths.svg" />
      </Head>

      <main className="flex flex-col items-center text-center justify-center flex-grow min-h-screen p-8 space-y-14">
        <p className="text-3xl">
          Can&apos;t find something that hasn&apos;t been built yet.
        </p>

        <h2 className="text-2xl hover:underline">
          <Link href="/">
            <a>The Hateful Society</a>
          </Link>
        </h2>
      </main>
    </div>
  );
};

export default Error404;
