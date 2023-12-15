import Image from "next/image";
import Link from "next/link";
import { CustomButtonProps } from "../types";

const CustomButton = ({ styling, lable, source, h }: CustomButtonProps) => {
  return (
    <div>
      <Link
        href={`${h}`}
        className={`flex justify-center items-center gap-2  px-4 py-2 rounded-full transition-all ${styling}`}
      >
        {source && (
          <Image src={source} alt="User image" width={20} height={20} />
        )}
        <h2 className="font-bold">{lable}</h2>
      </Link>
    </div>
  );
};

export default CustomButton;
