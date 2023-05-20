import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Location from "../components/Location";
import Reviews from "../components/Reviews";
import BookNow from "../components/BookNow";
import Footer from "../components/Footer";
import { getContent } from "../lib/api";

export default function Home({ content }) {
    return (
        <>
            <Head>
                <title>Jackson St Barbers — Fresh Haircuts In Petone </title>
            </Head>
            <main>
                <Hero content={content} />
                <Services />
                <Location />
                <Reviews />
                <BookNow />
                <Footer />
            </main>
        </>
    );
}

export async function getStaticProps(context) {
    const content = await getContent();

    return {
        props: {
            content,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
        revalidate: 1, // In seconds
    };
}
