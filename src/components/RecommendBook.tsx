import BooksRender from "./BooksRender";
import { Booklist } from "../constant/Booklist";

const RecommendBook = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg">Recommended for You</p>
      <BooksRender Booklist={Booklist} />
    </div>
  );
};

export default RecommendBook;
