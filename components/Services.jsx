import Intro from "./Intro";
import ServiceItem from "./ServiceItem";

export default function Services({ services }) {
    return (
        <div className="relative w-full bg-white">
            <section
                className="mx-auto min-h-[500px] max-w-[1440px] bg-white bg-services-bg bg-center py-20 px-6 flex flex-col gap-12 items-center"
                id="services"
            >
                <Intro
                    title="Services"
                    text="Whatever kind of cut you’re after, we’ve got you covered."
                    dark={true}
                />
                <div className="border-2 border-black p-4 w-full max-w-[600px]">
                    <ul className="flex flex-col gap-2 lg:gap-6">
                        {services
                            .slice(0, services.length)
                            .map(({ service, price }) => (
                                <>
                                    <ServiceItem
                                        service={service}
                                        price={price}
                                    />
                                </>
                            ))}
                    </ul>
                </div>
                {/* <Button text="Book now" url="tel:0223592995" dark={true} /> */}
            </section>
        </div>
    );
}
