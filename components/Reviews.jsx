import Button from "./Button";
import Intro from "./Intro";
import Image from "next/image";

export default function Reviews(props) {
  return (
    <div class="relative w-full bg-white">
      <section class="mx-auto min-h-[500px] max-w-[1440px] bg-white bg-reviews-bg bg-center py-20 px-6 flex flex-col gap-12 items-center text-black">
        <Intro
          title="Word on the street"
          text="Kind words from some of our customers."
          dark={true}
        />
        <div className="max-w-screen-lg lg:flex lg:flex-row-reverse lg:gap-16  lg:justify-center lg:items-center">
          <ul className="flex flex-col gap-12 lg:w-full">
            <li className="flex flex-col gap-2">
              <p>“The best haircut I’ve found on Jackson St, thank you Ali!”</p>
              <div className="flex gap-1">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>
              </div>
              <p className="italic">Charlie C.</p>
            </li>
            <li className="flex flex-col gap-2">
              <p>
                "Would highly recommend! Man is a beast at skin fades and is
                clean with each cut! Earned a new local customer, cheers for the
                cut brother 🙌"
              </p>
              <div className="flex gap-1">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>
              </div>
              <p className="italic">Richard H.</p>
            </li>
            <li className="flex flex-col gap-2">
              <p>
                "I got my 4 year olds first cut here. He was super efficient and
                patient with a very unsettled little boy. Highly recommend"
              </p>
              <div className="flex gap-1">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94878 0.343508L10.7448 5.66097L16.3565 5.72594C16.8394 5.73156 17.0393 6.34689 16.652 6.63488L12.1498 9.98578L13.8221 15.3432C13.9658 15.8042 13.4429 16.1841 13.0487 15.9048L8.47088 12.6582L3.89245 15.9042C3.49889 16.1834 2.97539 15.803 3.11907 15.3426L4.79139 9.98515L0.289169 6.63425C-0.0981462 6.34626 0.101758 5.73093 0.584653 5.72531L6.19635 5.66034L7.99236 0.342883C8.14729 -0.114398 8.79448 -0.114398 8.94878 0.343508Z"
                    fill="black"
                  />
                </svg>
              </div>
              <p className="italic">Nikki K.</p>
            </li>
          </ul>
          <div className="object-cover lg:w-full mt-12 lg:mt-0">
            <Image
              src="/ali-infront-of-shop.png"
              alt="Ali standing infront of the barber shop"
              width={560}
              height={718}
              priority
            />
          </div>
        </div>

        <Button text="Book now" url="#" dark={true} />
      </section>
    </div>
  );
}
