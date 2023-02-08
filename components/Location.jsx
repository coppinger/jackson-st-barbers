import Button from "./Button";
import Intro from "./Intro";
import Map from "./Map";

export default function Services() {
  return (
    <div class="relative w-full bg-off-dark">
      <section
        class="mx-auto min-h-[500px] max-w-[1440px]  bg-black bg-hero-pattern py-20 px-6 flex flex-col gap-12 items-center text-white"
        id="location"
      >
        <Intro
          title="Location"
          text="We’re located right in the heart of Petone."
          dark={false}
        />
        <div className="border-2 border-white w-full lg:flex flex-col lg:flex-row-reverse max-w-screen-lg">
          <div className="h-[400px] lg:w-full lg:object-fill lg:h-auto">
            <Map />
          </div>
          <div className="p-6 lg:p-12 flex flex-col gap-6">
            <div>
              <h3 className="mb-2">Address</h3>
              <a
                href="https://www.google.com/maps/place/Jackson+Street+Barbers/@-41.2248065,174.8740873,17z/data=!4m13!1m7!3m6!1s0x6d38ab95a0098051:0x19a99bdbefa553bd!2s194+Jackson+Street,+Petone,+Lower+Hutt+5012!3b1!8m2!3d-41.2248065!4d174.876276!3m4!1s0x6d38ab35f4cbc1a3:0x7c53b4463cafe9f6!8m2!3d-41.2247815!4d174.8763904"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-off-white"
              >
                194 Jackson St,
                <br />
                Petone 5012,
                <br />
                Lower Hutt
              </a>
            </div>
            <div>
              <h3 className="mb-2">Contact</h3>
              <p className="text-off-white">
                Call or text Ali on{" "}
                <a href="tel:022 359 2995" className="underline">
                  022 359 2995
                </a>
              </p>
            </div>
          </div>
        </div>
        <Button text="Book now" url="#" dark={false} />
      </section>
    </div>
  );
}
