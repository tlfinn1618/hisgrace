import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is an introduction</p>
        <p>
          This is a sample website
          <br />
          <Link href="/admin/dashboard">Dashboard</Link>
        </p>
      </section>
    </Layout>
  );
}
