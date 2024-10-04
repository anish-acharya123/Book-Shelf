import Recentreading from "./Recentreading";
import RecommendBook from "./RecommendBook";
import SearchBox from "./SearchBox";

const BookList = () => {
  return (
    <div className="bg-[#F3F3F7] w-5/6 p-5 flex flex-col gap-10">
      <SearchBox />
      <h1 className="text-3xl font-medium">Good Morning</h1>
      <RecommendBook />
      <Recentreading />
    </div>
  );
};

export default BookList;
