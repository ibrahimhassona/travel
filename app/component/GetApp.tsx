import Image from "next/image";
import { CustomButton } from ".";

const GetApp = () => {
  return (
    <section id="get_app">
      <div className="get-app ">
        <div className=" flex justify-between gap-20 lg:gap-5 w-full  md:flex-row  items-center flex-col">
          <div className="flex flex-col h-full w-full text-white justify-center gap-10 lg:items-start items-center">
            <h1 className="font-bold lg:text-[64px] text-[40px]">
              Get for free now!
            </h1>
            <p className="text-gray-200 text-xl">
              Available on iOS and Android
            </p>
            <div className="flex w-full  lg:flex-row flex-col  gap-5">
              <CustomButton
                h="/"
                lable="App Store"
                source="/apple.svg"
                styling="text-green-600 lg:w-[200px] w-[80%] mx-auto bg-white "
              />
              <CustomButton
                h="/"
                lable="Play Store"
                source="/android.svg"
                styling=" bg-transparent  lg:w-[200px] w-[80%] mx-auto border border-white "
              />
            </div>
          </div>
          <div className=" h-full w-full ">
            <Image
              src="/phones.png"
              className="mx-auto"
              alt="phone"
              width={400}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
