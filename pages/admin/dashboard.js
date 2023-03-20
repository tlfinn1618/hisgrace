import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

import Layout from "../../components/layout";

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Grace in the Desert</title>
      </Head>
      <h1>Admin Dashboard</h1>
      <h2>
        <Link href="/">Home</Link>
      </h2>
    </Layout>
  );
}
