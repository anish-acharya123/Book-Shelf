import BookList from "../components/Books/BookList";
import Navbar from "../components/Navbar/Navbar";

const Home: React.FC = () => {
  return (
    <div className="py-10 min-h-screen flex">
      <div className="flex w-full shadow-2xl rounded-md border-2 h-[91vh] ">
        <Navbar />
        <BookList />
      </div>
    </div>
  );
};

export default Home;
