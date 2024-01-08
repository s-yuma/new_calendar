import Link from "next/link";
import File from "./File";

const Sidebar = () => {
  return (
    <>
      <nav className="hidden xl:block mt-4">
        <ul className="sm:flex flex-col space-y-1 sm:w-40 text-white text-center gap-2 ">
          <li>
            <File />
          </li>
          <li>
            <File />
          </li>
          <li>
            <File />
          </li>
          <li>
            <File />
          </li>
          <li>
            <File />
          </li>
          <li>
            <File />
          </li>
          <li>
            <File />
          </li>
          <li>
            <File />
          </li>
          <li>
            <File />
          </li>
          <li>
            <File />
          </li>
          <li>
            <File />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
