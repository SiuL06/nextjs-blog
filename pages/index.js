import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>I'm Luis Phillip A. Mallari, and I live in Arayat, Pampanga. My hobbies include watching movies, basketball, and video games. In terms of music, my favorite song is Magpakailanman by Rocksteddy, which reminds me of my late mother.

      I chose IT because technology is extremely important in our time, especially in the midst of a pandemic. When a pandemic occurs, we see how important technology is and how it allows us to continue moving forward despite the pandemic.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}