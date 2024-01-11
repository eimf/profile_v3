// import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";

import NavLinks from "@/app/ui/nav-links";
import styles from "./page.module.css";

import { FcAbout } from "react-icons/fc";

// import clsx from "clsx";

export default function Home() {
  // const pathname = usePathname();
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <NavLinks />
        <p>
          <code className={styles.code}>Zeke</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Ezequiel Lopez
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            /> */}
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <p className={styles.neon} data-text="U">
          Z<span className={styles.flickerslow}>E</span>K
          <span className={styles.flickerfast}>E</span>
        </p>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>

      <div className={styles.grid}>
        <Link
          key="About"
          href="./about"
          // className={clsx(
          //   "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
          //   {
          //     "bg-sky-100 text-blue-600": pathname === "./about",
          //   }
          // )}
        >
          <FcAbout className="w-6" />
          <p className="hidden md:block">About</p>
        </Link>
      </div>
    </main>
  );
}
