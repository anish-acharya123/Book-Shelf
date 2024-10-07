import EachbookDetail from "../components/EachbookDetail";
import Navbar from "../components/Navbar/Navbar";

const Detailpage = () => {
  return (
    <div className=" py-10 min-h-screen flex  ">
      <div className=" flex  w-full  shadow-2xl rounded-md border-2 ">
        <Navbar />
        <EachbookDetail />
      </div>
    </div>
  );
};

export default Detailpage;
