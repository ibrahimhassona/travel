import Image from "next/image";
import { CustomIconH } from ".";
import { FEATURES } from "@/constants";
import { InernalCompnentProps } from "../types";

// Internal Component
const FeatComponent = ({ title, icon, description }: InernalCompnentProps) => {
  return (
    <li className="flex flex-col">
      <div
        className={`bg-green-600 w-fit flex justify-center items-center p-4 lg:p-7 rounded-full`}
      >
        <Image src={`${icon}`} alt={title} height={28} width={28} />
      </div>
      <div className="flex flex-col ">
        <h1 className="font-bold text-xl capitalize mt-5">{title}</h1>
        <p className="text-gray-600 bg-white/80 mt-5">{description}</p>
      </div>
    </li>
  );
};

const Features = () => {
  return (
    <section
      id="features"
      className=" overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 z-20 relative bg-white "
    >
      <div className="padding-container max-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            width={440}
            height={1000}
            alt="Phone"
            className="feature-phone "
          />
        </div>
        <div className="flex flex-col w-full lg:w-[60%] ">
          <h1 className="relative  text-[38px] lg:text-[64px] font-bold my-8">
            Our Features
            <CustomIconH styling="top-[-35px] " />
          </h1>
          <ul className="grid md:grid-cols-2 gap-10">
            {FEATURES.map((item) => (
              <FeatComponent
                title={item.title}
                icon={item.icon}
                description={item.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
