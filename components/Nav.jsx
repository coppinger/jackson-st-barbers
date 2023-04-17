import Image from "next/image";
import Button from "./Button";

export default function Nav() {
  return (
    <header>
      <nav className="flex justify-center pt-6 mb-12">
        <ul className="flex gap-12 mx-auto  items-center">
          <li className="text-lg font-bold text-white uppercase tracking-widest hidden md:block font-cevirnobold">
            <a href="#services">Services</a>
          </li>
          <li className="text-lg font-bold text-white uppercase tracking-widest hidden md:block font-cevirnobold">
            <a href="#location">Location</a>
          </li>
          <li>
            <Image
              src="/logo-white.png"
              alt="Jackson St Barbers Logo"
              width={168}
              height={96}
              priority
            />
          </li>
          <li className="text-lg font-bold text-white uppercase tracking-widest hidden md:block font-cevirnobold">
            <a href="#reviews">Reviews</a>
          </li>
          <li className="hidden md:block ">
            <a
              className="text-lg w-fit px-[18px] py-3 border-2 font-cevirnobold uppercase tracking-widest transform transition-all duration-200 ease-linear hover:border-opacity-40 hover:bg-transparent bg-[#358547] border-none text-white"
              href="tel:0223592995"
            >
              CALL US
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
