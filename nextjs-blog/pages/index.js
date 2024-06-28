import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Here it is...</p>
        <p>
          (React & NextJS Starter <a href="https://myjamjar.com.au">MyJamjar</a>
          .)
        </p>
      </section>
      <Link href="/posts/first-post">A Post</Link>
    </Layout>
  );
}
