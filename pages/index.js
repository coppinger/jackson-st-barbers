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

export default function Home() {
  return (
    <>
      <Head>
        <title>Jackson St Barbers — Fresh Haircuts In Petone </title>
      </Head>
      <main>
        <Hero />
        <Services />
        <Location />
        <Reviews />
        <BookNow />
        <Footer />
      </main>
    </>
  );
}

// <Image
// src="/thirteen.svg"
// alt="13"
// width={40}
// height={31}
// priority
// />
