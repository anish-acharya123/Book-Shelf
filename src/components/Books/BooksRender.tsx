import { useNavigate } from "react-router-dom";
import { Book } from "../../types";
import { ListComponent } from "../Navlist/NavListItem";

const BooksRender = ({ Booklist }: { Booklist: Book[] }) => {
  const navigate = useNavigate();

  const renderBookItem = (book: Book) => (
    <li
      key={book.id}
      onClick={() => navigate(`/book/${book.id}`)}
      className="bg-white rounded-lg gap-1 text-sm text-start flex flex-col py-2 px-4 cursor-pointer shadow-md items-center"
    >
      <figure>
        <img src={book.img} alt="img" className="h-52 w-40 rounded-lg" />
      </figure>
      <p className="w-full font-medium">{book.name}</p>
      <p className="w-full">
        <span>{book.author}, </span>
        <span>{book.date}</span>
      </p>
      <p className="w-full">
        {book.rate} <span className="text-gray-400">/5</span>
      </p>
    </li>
  );

  return (
    <ListComponent
      className="flex justify-between items-center"
      items={Booklist}
      renderItem={renderBookItem}
    />
  );
};

export default BooksRender;
