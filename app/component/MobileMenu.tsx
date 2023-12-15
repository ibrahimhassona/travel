import { NAV_LINKS } from "@/constants";
import { goToSction } from "./NavBar";
import { CustomButton } from ".";
import { MobMenuProp } from "../types";

const MobileMenu = ({ CtrlStyles }: MobMenuProp) => {
  return (
    <div className={` mob-menu  hidden ${CtrlStyles}`}>
      {NAV_LINKS.map((link) => (
        <div
          key={link.id}
          className="hover:text-green-600 text-gray-700 transition-all ease-in-out m "
          onClick={(event) => goToSction(link.id, event)}
        >
          {link.label}
        </div>
      ))}
      <CustomButton
        h="/Login"
        styling="text-white bg-gray-700  hover:bg-green-600 md:flex rounded-full bg-gray-700  "
        lable="Login"
        source="/user.svg"
      />
    </div>
  );
};

export default MobileMenu;
