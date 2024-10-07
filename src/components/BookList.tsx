import { FC } from "react";
import Recentreading from "./Recentreading";
import RecommendBook from "./RecommendBook";
import SearchBox from "./SearchBox";
import HomeBanner from "./HomeBanner";

const BookList: FC = () => {
  return (
    <div className="bg-[#F3F3F7] w-5/6 p-5 flex flex-col gap-10 h-full  ">
      <SearchBox />
      <div className="flex flex-col justify-between h-full   p-2 gap-10  overflow-y-auto ">
        <HomeBanner />
        <h1 className="text-3xl font-medium">Good Morning</h1>
        <RecommendBook />
        <Recentreading />
      </div>
    </div>
  );
};

export default BookList;
