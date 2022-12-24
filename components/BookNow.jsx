import Button from "./Button";
import Intro from "./Intro";

export default function BookNow() {
  return (
    <div className="relative w-full bg-off-dark">
      <section class="mx-auto max-w-[1440px] bg-black bg-hero-pattern py-20 px-6 flex flex-col gap-12 items-center text-white">
        <Intro
          title="Come on down"
          text="Book your appointment now—it’s quick & easy!"
          dark={false}
        />
        <Button text="Book now" url="#" dark={false} calltoaction={true} />
      </section>
    </div>
  );
}
