import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="px-0 py-8">
      <Head>
        <title>The Hateful Society</title>
        <meta name="description" content="The Hateful Society" />
        <link rel="icon" href="/ths.svg" />
      </Head>

      <main className="flex flex-col items-center text-center justify-center flex-grow min-h-screen p-8 space-y-14">
        <h1 className="font-sans hover:underline text-6xl">
          <p>The Hateful Society</p>
        </h1>

        <h2 className="text-2xl hover:underline">
          <Link href="/store">
            <a>Store</a>
          </Link>
        </h2>

        <p className="text-3xl">Not coming soon.</p>

        <select
          className="text-3xl"
          value={theme}
          onChange={e => setTheme(e.target.value)}
          data-test-id="theme-selector"
        >
          <option value="system">System</option>
          {mounted && (
            <>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </>
          )}
        </select>
      </main>
    </div>
  );
};

export default Home;
