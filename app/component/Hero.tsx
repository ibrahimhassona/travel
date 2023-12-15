import Image from "next/image";
import { CustomButton, CustomIconH } from ".";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 bg-white z-20 relative max-md:items-center  xl:flex-row "
    >
      <div className="hero-map" />
      <div className="flex flex-row  md:flex-col">
        <div className="flex flex-col gap-11 relative z-10">
          <h1 className="relative text-[52px] font-[700] leading-[120%] lg:text-[88px]">
            Putuk Truno Camp Area
            <CustomIconH styling="top-[-35px] left-[-10px] lg:left-0" />
          </h1>
          <p className="text-gray-600 leading-6 text-lg ">
            We want to be on each of your journeys seeking the satisfaction of
            seeing the incorruptible beauty of nature. We can help you on an
            adventure around the world in just one app
          </p>
          <div className="flex flex-row gap-0 justify-start max-md:justify-center">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
            <p className="text-gray-600 ml-3 text-lg">
              <span className="font-bold text-black">198k</span> Excellent
              Reviews
            </p>
          </div>
          <div className="flex flex-row max-md:flex-col gap-5 max-md:items-center">
            <CustomButton
              h="/"
              styling="bg-green-600 text-white py-[13px] px-7 text-lg  max-md:text-sm   max-md:min-w-[200px]"
              lable="Download App"
            />
            <CustomButton
              h="/"
              styling="text-gray-600 py-[13px] px-7 text-lg border border-green-600  max-md:text-sm max-md:min-w-[200px] "
              lable="How we work ?"
              source="/play.svg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start max-md:justify-center max-md:items-center gap-5 relative bg-[#292c27] rounded-3xl px-7 py-5  w-[400px] max-md:w-fit h-[200px] text-gray-20 ">
        <p className="flex flex-col gap-0">
          Location{" "}
          <span className="font-bold text-lg text-white">Aguas Calientes</span>
        </p>
        <div className="flex justify-between gap-4">
          <p className="flex flex-col ">
            Distance{" "}
            <span className="font-bold text-lg text-white">173.28 mi</span>
          </p>
          <p className="flex flex-col ">
            Elevation{" "}
            <span className="font-bold text-lg text-white"> 2.040 km</span>
          </p>
        </div>
        <Image
          src="/close.svg"
          alt="close"
          width={30}
          height={30}
          className="absolute top-4 right-3 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Hero;
