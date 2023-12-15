import Image from "next/image";
import { CustomIconH } from ".";

const Guide = () => {
  return (
    <section
      id="how_hilink_work"
      className=" pt-10 mt-[50px]  flex flex-col bg-white relative z-20"
    >
      <div className="padding-container">
        <p className="relative text-green-600 text-lg ">
          WE ARE HERE FOR YOU
          <CustomIconH styling="top-[-50px] left-[-3px] lg:left-0" />
        </p>
        <h1 className="text-[64px] font-[700] max-md:text-[52px] ">
          Guide You to Easy Path
        </h1>
        <p className="text-gray-600 ">
          Only with the hilink application you will no longer get lost and get
          lost again, because we already support offline maps when there is no
          internet connection in the field. Invite your friends, relatives and
          friends to have fun in the wilderness through the valley and reach the
          top of the mountain .
        </p>
      </div>
      <div className="guide padding-container flex justify-start  max-md:justify-center items-center h-[80vh] max-md:h-[300px] mt-[20px]">
        <div className="flex  flex-row relative justify-around gap-5 h-[200px] bg-white  rounded-xl p-5">
          <Image src="/meter.svg" height={150} width={50} alt="meter" />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <p className="flex flex-row justify-between items-center text-xl">
                <span className="text-gray-500">Destination </span>
                <span className="text-green-500">48 min</span>
              </p>
              <h3 className="text-black font-bold text-xl">Aguas Calientes</h3>
            </div>
            <div className="flex flex-col gap-1">
              <p className="flex flex-row justify-between items-center text-xl">
                <span className="text-gray-500">Start track</span>
              </p>
              <h3 className="text-black font-bold text-xl">
                Wonorejo Pasuruan
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
