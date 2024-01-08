import Link from "next/link";
import { IconName, WiAlien } from "react-icons/wi";
import { GiJumpingDog } from "react-icons/gi";
import Weather from "../components/Weather";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <>
      <header className="flex text-white justify-between flex-col xl:flex-row">
        <div className="text-5xl flex justify-center items-center text-white sm:ml-2 ml-12 ">
          <GiJumpingDog className="text-8xl" />
          <h1>Cotton</h1>
        </div>
        <div className="flex justify-center items-center text-center flex-wrap space-x-4 md:text-2xl">
          <Link href="/" className=" hover:text-sky-500">FILE</Link>
          <Link href="/" className=" hover:text-sky-500">VIEW</Link>
          <Link href="/" className=" hover:text-sky-500">OVERLAYS</Link>
          <Link href="/" className=" hover:text-sky-500">AISPEED</Link>
          <Link href="/" className=" hover:text-sky-500">TMT</Link>
          <Link href="/" className=" hover:text-sky-500">INJETCTS MSSV</Link>
          <Link href="/" className=" hover:text-sky-500">CONTROL AI</Link>
        </div>
        <div className="flex justify-center items-center ">
          <Weather />
        </div>
        <div className="flex justify-center items-center ml-2">
          <UserButton afterSignOutUrl="/"  />
        </div>
      </header>
    </>
  );
};

export default Header;
