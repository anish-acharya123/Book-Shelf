import { FC } from "react";
import Recentreading from "./Recentreading";
import RecommendBook from "./RecommendBook";
import HomeBanner from "../HomeBanner";

const BookList: FC = () => {
  return (
  
      <div className="flex flex-col justify-between p-2 gap-10 overflow-y-auto h-[75vh] no-scrollbar  ">
        <HomeBanner />
        <h1 className="text-3xl font-medium">Good Morning</h1>
        <RecommendBook />
        <Recentreading />
      </div>
  );
};

export default BookList;
