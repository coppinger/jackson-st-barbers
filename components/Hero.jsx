import Image from "next/image";
import Nav from "./Nav";

export default function Hero() {
  return (
    <div className="relative w-full bg-off-dark">
      <div className="mx-auto min-h-[500px] max-w-[1440px] bg-hero-pattern px-6">
        <Nav />
        <section className="flex flex-col lg:flex-row gap-10 text-white pb-12 lg:items-center lg:justify-center lg:gap-16 lg:pb-32 lg:pt-24 max-w-screen-lg mx-auto">
          <div className="grid grid-cols-2 gap-6 relative object-fill mx-auto max-w-[400px] lg:w-full lg:max-w-none">
            <Image
              src="/ali-hero-left.png"
              alt="Jackson St Barbers Logo"
              width={264}
              height={460}
              priority
              className="relative z-10 w-full"
            />
            <Image
              src="/ali-hero-right.png"
              alt="Jackson St Barbers Logo"
              width={264}
              height={460}
              priority
              className="relative z-10 w-full"
            />
            <div className="h-[calc(100%_+_48px)] -top-6 absolute border-2  left-1/2 transform -translate-x-1/2 border-white z-0 w-[calc(100%_-_48px)]"></div>
          </div>
          <div className="flex flex-col gap-6 lg:items-start items-center lg:justify-start justify-center w-full mx-auto">
            <div className="flex flex-col gap-2 max-w-[400px]">
              <h1 className="text-5xl font-cevirnosemibold">
                Jackson St’s locally-owned barber shop
              </h1>
              <p className="text-off-white">
                Experience the finest haircuts and shaves at our traditional
                barber shop.
              </p>
            </div>
            <div className="border-2 border-white p-4 w-full max-w-[440px]">
              <ul className="flex flex-col gap-2">
                <li className="flex justify-between gap-2 items-center">
                  <p className="font-bold whitespace-nowrap uppercase text-lg">
                    Mon
                  </p>
                  <hr className="w-full border-t-[1px] border-b-[1px] border-white border-dashed" />
                  <p className="whitespace-nowrap text-off-white">
                    10:15 am – 6:00 pm
                  </p>
                </li>
                <li className="flex justify-between gap-2 items-center">
                  <p className="font-bold whitespace-nowrap uppercase text-lg">
                    Tue, Wed, Thu
                  </p>
                  <hr className="w-full border-t-[1px] border-b-[1px] border-white border-dashed" />
                  <p className="whitespace-nowrap text-off-white">
                    9:15 am – 6:00 pm
                  </p>
                </li>
                <li className="flex flex-col">
                  <div className="flex justify-between gap-2 items-center">
                    <p className="font-bold whitespace-nowrap uppercase text-lg">
                      Fri
                    </p>
                    <hr className="w-full border-t-[1px] border-b-[1px] border-white border-dashed" />
                    <p className="whitespace-nowrap text-off-white">
                      9:15 am – 1:30 pm
                    </p>
                  </div>
                  <p className="whitespace-nowrap text-right text-off-white">
                    2:30 – 6:00 pm
                  </p>
                </li>
                <li className="flex justify-between gap-2 items-center">
                  <p className="font-bold whitespace-nowrap uppercase text-lg">
                    Sat
                  </p>
                  <hr className="w-full border-t-[1px] border-b-[1px] border-white border-dashed" />
                  <p className="whitespace-nowrap text-off-white">
                    9:15 am – 4:00 pm
                  </p>
                </li>
                <li className="flex justify-between gap-2 items-center">
                  <p className="font-bold whitespace-nowrap uppercase text-lg">
                    Sun
                  </p>
                  <hr className="w-full border-t-[1px] border-b-[1px] border-white border-dashed" />
                  <p className="whitespace-nowrap text-off-white">Closed</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
