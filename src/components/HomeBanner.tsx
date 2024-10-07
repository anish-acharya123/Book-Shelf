import { Booklist } from "../constant/Booklist";
const HomeBanner: React.FC = () => {
  return (
    <div className="flex gap-6">
      <div className="w-2/5 bg-[#FA7C54E5]  p-8 text-white rounded-lg flex flex-col gap-2">
        <h3 className="text-2xl">Today's Quoote</h3>
        <blockquote className="flex flex-col items-end">
          <p className="text-lg">
            “There is more treasure in books than in all the pirate’s loot on
            Treasure Island.”
          </p>
          <cite className="text-left    ">-Wait Disney</cite>
        </blockquote>
        <div className="flex gap-4">
          <p className="border-white  border-1   p-1 bg-white rounded-full " />
          {Array(3).fill(
            <p className="border-white  border-1  p-1 bg-gray-700 rounded-full " />
          )}
        </div>
      </div>
      <div className="w-3/5  flex gap-4 rounded-lg  overflow-hidden border-2 border-[#FA7C54E5]">
        <div className="text-white bg-[#FA7C54E5] h-full w-1/12 text-center flex justify-center">
          <span className="text-rotate text-2xl">New Arrivals</span>
        </div>
        <div className="w-11/12  p-4 flex justify-between items-center gap-4">
          {Booklist.slice(0, 4).map((item) => (
            <div className="border-2 p-4 cursor-pointer">
              <figure>
                <img src={item.img} alt="" className="h-36 w-36 rounded-lg" />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
