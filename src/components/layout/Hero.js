import Image from "next/image";
import Right from "../icons/Right";
import TopRight from "../icons/TopRight";

function Hero() {
  return (
    <div className="hero w-9/10 mx-auto mt-4">
      <div className="py-12 ">
        <h1 className="text-4xl font-semibold">
          Everything <br />
          Is Better <br />
          With A&nbsp;
          <span className="logo-color font-bold italic">PIZZA</span>
        </h1>
        <p className="mt-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes everyday whole. Simple yet
          delicious joy in life!
        </p>
        <div className="flex gap-2 mt-6 ">
          <button
            className="flex justify-center text-white! items-center px-3 py-2 text-sm font-semibold rounded-2xl logo-bg
               hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
          >
            Order Now
            <Right />
          </button>
          <button
            className="flex justify-center items-center gap-2 px-3 py-2 text-sm md:text-md font-semibold rounded-2xl border-2! border-[#f13a01]! text-[#f13a01]!
               hover:scale-105 transition duration-300 ease-in-out"
          >
            Learn More
            <TopRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      <div className="relative ">
        <Image
          src="/pizza.png"
          alt="Delicious pizza"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Hero;
