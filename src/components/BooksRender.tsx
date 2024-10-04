import { Booklist } from "../constant/Booklist";
import { useNavigate } from "react-router-dom";

const BooksRender = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between items-center">
      {Booklist.map((book) => (
        <div
          onClick={() => navigate(`/book/${book.id}`)}
          className="bg-white rounded-lg gap-1 text-sm text-start flex flex-col justify- py-2 px-4 cursor-pointer shadow-md items-center"
        >
          <figure>
            <img src={book.img} alt="img" className="h-44 w-40 rounded-lg" />
          </figure>
          <p className="w-full font-medium">{book.name}</p>
          <p className="w-full">
            <span>{book.author}, </span>
            <span>{book.date}</span>
          </p>
          <p className="w-full">
            {book.rate} <span className="text-gray-400">/5</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BooksRender;
