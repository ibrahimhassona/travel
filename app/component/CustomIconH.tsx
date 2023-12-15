import Image from "next/image";
import { CustomIconProp } from "../types";

const CustomIconH = ({ styling }: CustomIconProp) => {
  return (
    <Image
      src="/camp.svg"
      alt="camp"
      width={50}
      height={50}
      className={`absolute ${styling}`}
    />
  );
};

export default CustomIconH;
