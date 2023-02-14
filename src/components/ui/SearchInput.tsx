import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const searchImage = require("@/assets/ic_Search.png");

export const SearchInput = () => {
  const { asPath, push } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    push(`/items?search=${searchTerm}`);
  };
  return (
    <div className="search--container">
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
      />
      <button 
      onClick={onSearchTerm}
      >
        <Image src={searchImage} alt="Ingrese su busqueda" />
      </button>
    </div>
  );
};
