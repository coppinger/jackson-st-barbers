import Button from "./Button";
import Intro from "./Intro";

export default function Services() {
  return (
    <div class="relative w-full bg-white">
      <section class="mx-auto min-h-[500px] max-w-[1440px] bg-white bg-services-bg bg-center py-20 px-6 flex flex-col gap-12 items-center">
        <Intro
          title="Services"
          text="Whatever kind of cut you’re after, we’ve got you covered."
          dark={true}
        />
        <div className="border-2 border-black p-4 w-full max-w-[600px]">
          <ul className="flex flex-col gap-2 lg:gap-6">
            <li className="flex justify-between items-center gap-2">
              <p className="font-bold whitespace-nowrap">Basic cut</p>
              <hr className="w-full border-t-[1px] border-b-[1px] border-black border-dashed" />
              <p>$35.00</p>
            </li>
            <li className="flex justify-between items-center gap-2">
              <p className="font-bold whitespace-nowrap">Razor fade</p>
              <hr className="w-full border-t-[1px] border-b-[1px] border-black border-dashed" />
              <p>$50.00</p>
            </li>
            <li className="flex justify-between items-center gap-2">
              <p className="font-bold whitespace-nowrap">Beard trim</p>
              <hr className="w-full border-t-[1px] border-b-[1px] border-black border-dashed" />
              <p>$25.00</p>
            </li>
            <li className="flex justify-between items-center gap-2">
              <p className="font-bold whitespace-nowrap">Full works</p>
              <hr className="w-full border-t-[1px] border-b-[1px] border-black border-dashed" />
              <p>$60.00</p>
            </li>
            <li className="flex justify-between items-center gap-2">
              <p className="font-bold whitespace-nowrap">Buzz cut</p>
              <hr className="w-full border-t-[1px] border-b-[1px] border-black border-dashed" />
              <p>$20.00</p>
            </li>
          </ul>
        </div>
        <Button text="Book now" url="#" dark={true} />
      </section>
    </div>
  );
}
