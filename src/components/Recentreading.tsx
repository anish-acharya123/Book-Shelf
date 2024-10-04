import BooksRender from "./BooksRender";
const Recentreading = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg">Recent Reading</p>
      <BooksRender/>
    </div>
  );
};

export default Recentreading;
