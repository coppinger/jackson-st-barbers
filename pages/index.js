import Head from "next/head";
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
                <title>Jackson St Barbers — Fresh Haircuts In Petone</title>
                <meta
                    name="title"
                    content="Jackson St Barbers — Fresh Haircuts In Petone"
                />
                <meta
                    name="description"
                    content="Discover Jackson St Barbers - your local barbershop offering high-quality men's grooming services. Professional and friendly barbers ready to give you a precision cut, shave, or beard trim. Walk-ins welcome at our convenient downtown location."
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.jacksonstbarbers.co.nz/"
                />
                <meta
                    property="og:title"
                    content="Jackson St Barbers — Fresh Haircuts In Petone"
                />
                <meta
                    property="og:description"
                    content="Discover Jackson St Barbers - your local barbershop offering high-quality men's grooming services. Professional and friendly barbers ready to give you a precision cut, shave, or beard trim. Walk-ins welcome at our convenient downtown location."
                />
                <meta
                    property="og:image"
                    content="https://www.jacksonstbarbers.co.nz/jackson-st-barbers-petone.jpg"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.jacksonstbarbers.co.nz/"
                />
                <meta
                    property="twitter:title"
                    content="Jackson St Barbers — Fresh Haircuts In Petone"
                />
                <meta
                    property="twitter:description"
                    content="Discover Jackson St Barbers - your local barbershop offering high-quality men's grooming services. Professional and friendly barbers ready to give you a precision cut, shave, or beard trim. Walk-ins welcome at our convenient downtown location."
                />
                <meta
                    property="twitter:image"
                    content="https://www.jacksonstbarbers.co.nz/jackson-st-barbers-petone.jpg"
                />
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
