import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Grace in the Desert";
const nameMid = "Where no one misses the grace of God";
const nameBottom = "Adventist Church";
export const siteTitle = name;

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="icon"
          href="images/favicon.svg"
        />
        <meta
          name="description"
          content="Grace in the Desert Church online community."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta
          name="og:title"
          content={siteTitle}
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/graceLogo.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2XL}>{name}</h1>
            <h3 className={utilStyles.headingScript}>{nameMid}</h3>
            <h3 className={utilStyles.headingLg}>{nameBottom}</h3>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/graceLogo.png"
                className={utilStyles.borderCircle}
                height={50}
                width={50}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link
                href="/"
                className={utilStyles.colorInherit}
              >
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to Home</Link>
        </div>
      )}
    </div>
  );
}
