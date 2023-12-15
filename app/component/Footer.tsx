import {
  FOOTER_COMUNITY,
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SOCIALS,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-gray-600 relative flex flex-wrap md:flex-row flex-col justify-between md:text-start text-center md:items-start items-center gap-8  px-6 py-10"
    >
      <Image
        src="./hilink-logo.svg"
        width={74}
        height={20}
        alt="Travel Logo"
        className="cursor-pointer"
      />
      <div className="flex gap-4 justify-start">
        {FOOTER_LINKS.map((link) => (
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-[20px]">{link.title}</h1>
            {link.links.map((li) => (
              <Link
                href="/"
                className="hover:text-green-600 text-gray-700  transition-all ease-in-out"
              >
                {li}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex gap-4 justify-start">
        {FOOTER_COMUNITY.map((link) => (
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-[20px] ">{link.title}</h1>
            {link.links.map((li) => (
              <Link
                href="/"
                className="hover:text-green-600 text-gray-700  transition-all ease-in-out"
              >
                {li}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="flex gap-5 justify-start flex-col">
        <h1 className="font-bold text-[20px]">{FOOTER_CONTACT_INFO.title}</h1>
        {FOOTER_CONTACT_INFO.links.map((li) => (
          <Link
            href="/"
            key={li.value}
            className="hover:text-green-600 text-gray-700  transition-all ease-in-out"
          >
            {li.label}: {li.value}
          </Link>
        ))}
      </div>
      <div className="flex gap-5 justify-start flex-col">
        <h1 className="font-bold text-[20px]">{SOCIALS.title}</h1>
        <div className="flex gap-3 justify-center items-center">
          {SOCIALS.links.map((li) => (
            <Image
              src={li}
              height={25}
              width={25}
              alt={`${li.replace(/\/(.+)\.svg/, "$1")} icon`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
