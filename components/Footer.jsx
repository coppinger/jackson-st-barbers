import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 py-20 px-6 justify-center items-center">
      <Image
        src="/logo-dark.png"
        alt="Jackson St Barbers Logo"
        width={209}
        height={119}
        priority
      />
      <a className="underline" href="tel:022 359 2995">
        022 359 2995
      </a>
      <a
        href="https://www.google.com/maps/place/Jackson+Street+Barbers/@-41.2248065,174.8740873,17z/data=!4m13!1m7!3m6!1s0x6d38ab95a0098051:0x19a99bdbefa553bd!2s194+Jackson+Street,+Petone,+Lower+Hutt+5012!3b1!8m2!3d-41.2248065!4d174.876276!3m4!1s0x6d38ab35f4cbc1a3:0x7c53b4463cafe9f6!8m2!3d-41.2247815!4d174.8763904"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-center"
      >
        276 Jackson St,
        <br />
        Petone 5012,
        <br />
        Lower Hutt
      </a>
    </footer>
  );
}
