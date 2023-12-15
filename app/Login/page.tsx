"use client";

import { MouseEvent, useState } from "react";
import { CustomButton } from "../component";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [switchForm, setSwitchForm] = useState("login");

  const switchFormHandle = (e: MouseEvent) => {
    const lis = document.querySelectorAll("li");

    const target = e.target as HTMLInputElement;
    const typeOfForm = target.dataset.set;
    setSwitchForm(`${typeOfForm}`);

    lis.forEach((li) => {
      li.classList.remove("form-active-switch");
    });

    target.classList.add("form-active-switch");
  };

  return (
    <div className="absolute w-full h-[100vh] top-0 right-0 z-30 ">
      <div className="fixed top-0 left-0 w-full h-[100vh] opacity-80 bg-black " />
      <div className="bg-white max-sm:w-[80%] max-sm:left-[10%] md:w-[50%]  shadow-lg top-[25%] left-[25%] rounded-2xl fixed z-50 p-5 flex flex-col justify-between">
        <ul className="flex gap-5 justify-center  w-[80%] mx-auto">
          <li
            className="cursor-pointer border-2 border-transparent py-1 px-2 rounded-lg transition-all ease-in-out form-active-switch"
            data-set="login"
            onClick={(e) => switchFormHandle(e)}
          >
            Login
          </li>
          <li
            className="cursor-pointer border-2 border-transparent  py-1 px-2 rounded-lg transition-all ease-in-out"
            data-set="sign_up"
            onClick={(e) => switchFormHandle(e)}
          >
            Sign Up
          </li>
        </ul>
        {switchForm && (
          <Form
            pleHolder="Enter your (Email or User name)"
            title={`${switchForm}`}
          />
        )}
        <Link href="/" className="bg-black">
          <Image
            src="/close.svg"
            alt="close"
            width={30}
            height={30}
            className="bg-red-600 absolute cursor-pointer transition-all ease-in-out hover:bg-red-800 right-[5px] top-[5px] rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};

// data interface
interface FormProps {
  pleHolder: string;
  title: string;
}

// Entry component
const Form = ({ pleHolder, title }: FormProps) => {
  return (
    <div className="flex flex-col gap-4 mt-5 justify-center items-center w-full">
      <h2 className="font-bold text-green-50 text-lg ">
        {title.toUpperCase().replace("_", " ")} FORM
      </h2>
      <input
        placeholder={pleHolder}
        type="email"
        className="w-[80%] h-[35px] max-md:w-[100%] py-1 px-3 mx-auto outline-[1px] outline-green-700 border-green-50 border-[1px] text-sm rounded-lg"
      />
      <input
        placeholder="Password"
        type="password"
        className="w-[80%] h-[35px] max-md:w-[100%] py-1 px-3 mx-auto outline-[1px] outline-green-700 border-green-50 border-[1px] text-sm rounded-lg"
      />
      <CustomButton
        h="/"
        styling="bg-green-50 text-white rounded-lg "
        lable={title === "sign_up" ? "Check your mail box" : title}
      />
    </div>
  );
};
export default page;
