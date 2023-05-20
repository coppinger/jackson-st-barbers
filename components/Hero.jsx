import Image from "next/image";
import Nav from "./Nav";
import ScheduleListItem from "./ScheduleListItem";

export default function Hero({ content }) {
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
                                Experience the finest haircuts and shaves at our
                                traditional barber shop.
                            </p>
                        </div>
                        <div className="border-2 border-white p-4 w-full max-w-[440px]">
                            <ul className="flex flex-col gap-2">
                                {content
                                    .slice(0, content.length)
                                    .map(({ day, opening, closing }) => (
                                        <>
                                            <ScheduleListItem
                                                day={day}
                                                opening={opening}
                                                closing={closing}
                                            />
                                        </>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
