import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleClick = () => {
    console.log("click");
    if (search.length > 0) {
      navigate(`/search/?search=${search}`);
    }
  };

  console.log(search);

  return (
    <div className="flex justify-center items-center text-lg gap-6">
      <p className=" px-4 border-2 rounded-full w-6/7  w-full flex justify-center items-center  gap-4">
        <p className="flex justify-center items-center gap-4">
          <span>All </span>
          <Icon icon="mingcute:down-fill" className="inline" />
        </p>
        <input
          type="search"
          className="w-full h-full outline-none text-lg py-2 px-4"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleClick}>
          <Icon icon="iconamoon:search-bold" />
        </button>
      </p>
      <button className="w-1/7 bg-white flex  gap-4 justify-start p-2 items-center border-2 rounded-full py-1">
        <figure>
          <img
            src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-full h-8 w-8"
          />
        </figure>
        <span>Anish</span>
        <Icon icon="mingcute:down-fill" className="inline" />
      </button>
    </div>
  );
};

export default SearchBox;
