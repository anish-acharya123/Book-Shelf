import BookList from "../components/BookList";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div className=" py-10 min-h-screen flex  ">
      <div className=" flex  w-full  shadow-2xl rounded-md border-2 ">
        <Navbar />
        <BookList />
      </div>
    </div>
  );
};

export default Home;
