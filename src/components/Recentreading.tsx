import BooksRender from "./BooksRender";
import { Booklist } from "../constant/Booklist";

const Recentreading = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg">Recent Reading</p>
      <BooksRender Booklist={Booklist} />
    </div>
  );
};

export default Recentreading;
