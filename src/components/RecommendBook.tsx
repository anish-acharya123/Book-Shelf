import BooksRender from "./BooksRender";

const RecommendBook = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg">Recommended for You</p>
      <BooksRender />
    </div>
  );
};

export default RecommendBook;
