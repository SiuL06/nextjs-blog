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
        <p>My name is Kenneth Clark G. Auguis, I live in Cacutud, Arayat, Pampanga. I’m 21 years old.
        My hobbies include dancing, playing video games, creating art, cooking, and my favorite activity is meditating. I enjoy spending my free time at meditation retreats, as I believe they have significantly contributed to my understanding of my mind's complexities and have greatly improved my mental well-being.

        My favorite music that I always play in my spotify is
What was I made for, everything I wanted, and Happier than ever  by Billie Eilish
Human by Christina Perri
I won’t give up by Jason Mraz

        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}