import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

function HomeMenu() {
  return (
    <>
      <div>
        <div className="absolute left-0 right-0 w-full justify-start">
          <div className=".absolute left-0 -top-[70px] text-left -z-10">
            <Image src="/sallad1.png" width={109} height={189} alt="salad" />
          </div>
          <div className="absolute -top-[100px] right-0 -z-10">
            <Image src="/sallad2.png" width={107} height={195} alt="salad" />
          </div>
        </div>
        <SectionHeader subHeader="Check out" mainHeader="Menu" />
        <div className="grid grid-cols-3 gap-4 mt-26">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
    </>
  );
}

export default HomeMenu;
