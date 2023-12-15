import Image from "next/image";

const Camp = () => {
  return (
    <section className="w-full relative flex flex-col justify-center items-center ">
      <div className="camp  w-full h-[calc(100vh-72px)]">
        <div className="padding-container relative h-full ">
          <div className="flex flex-row items-center gap-5 absolute top-2 py-2 px-0">
            <Image
              src="folded-map.svg"
              width={60}
              height={60}
              alt="folded map"
              className="bg-green-600 rounded-full p-[15px]"
            />
            <div className="flex flex-col text-gray-10">
              <h1 className="font-bold text-xl">Putuk Truno Camp</h1>
              <span>Prigen, Pasuruan</span>
            </div>
          </div>
          <div className="flex flex-row items-center bottom-0 left-15 absolute py-2 md:pl-5 ">
            {Array(4)
              .fill(1)
              .map((_, index) => (
                <Image
                  src={`/person-${index + 1}.png`}
                  className="ml-[-15px]"
                  key={index}
                  height={40}
                  width={40}
                  alt={`person-${index + 1}.png`}
                />
              ))}
            <h2 className="font-bold text-lg ml-8 text-gray-10">50+ Joined</h2>
          </div>
        </div>
      </div>
      <div className=" text-white bg-green-500 absolute right-5 top-[50%] w-[500px] rounded-lg py-6 px-12 max-md:flex max-md:flex-col max-md:relative max-md:right-auto max-md:my-6 max-md:mx-auto max-md:w-[80%]">
        <h1 className="font-bold text-2xl">
          Feeling Lost{" "}
          <span className="font-normal">And Not Knowing The Way?</span>
        </h1>
        <p className="leading-5 mt-5">
          Starting from the anxiety of the climbers when visiting a new climbing
          location, the possibility of getting lost is very large. That's why we
          are here for those of you who want to start an adventure .
        </p>
        <Image
          src="/quote.svg"
          width={100}
          height={100}
          alt="quote"
          className="absolute right-1 top-0"
        />
      </div>
    </section>
  );
};

export default Camp;
