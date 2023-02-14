import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./SearchInput";

const logo = require("@/assets/Logo_ML.png");

export const NavBar = () => {
  return (
    <div className="navbar">
      
        <div className="logo">
          <Link href={'/'}>
          <Image src={logo} alt="Mercado lIbre" priority />
          </Link>
        </div>
        <SearchInput />
      
    </div>
  );
};
