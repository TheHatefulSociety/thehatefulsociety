import type { NextPage } from "next";
import Link from "next/link";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="px-0 py-8 mix-blend-difference dark:mix-blend-difference">
      <main className="flex flex-col items-center text-center justify-center flex-grow min-h-screen p-8 space-y-10">
        <div className="flex flex-col space-y-2">
          <h1 className="text-white dark:text-white hover:overline text-6xl decoration-8 underline-offset-8">
            The Hateful Society
          </h1>
          <div className="flex flex-wrap flex-row items-center text-center justify-center space-x-5">
            <h2 className="text-white dark:text-white text-2xl hover:underline decoration-3 underline-offset-8">
              <Link href="/store">Store</Link>
            </h2>
            <h2 className="text-white dark:text-white text-2xl hover:underline decoration-3 underline-offset-8">
              <a
                href="https://instagram.com/thehatefulsociety"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </h2>
            <h2 className="text-white dark:text-white text-2xl hover:underline decoration-3 underline-offset-8">
              <a
                href="https://twitter.com/hatefulsociety"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </h2>
            <h2 className="text-white dark:text-white text-2xl hover:underline decoration-3 underline-offset-8">
              <a
                href="https://github.com/thehatefulsociety"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </h2>
          </div>
        </div>

        <p className="text-white dark:text-white text-3xl">Not coming soon.</p>

        <button
          className="text-white dark:text-white text-xl"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          Change theme
        </button>
      </main>
    </div>
  );
};

export default Home;
