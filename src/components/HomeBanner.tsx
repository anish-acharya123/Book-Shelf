const HomeBanner = () => {
  return (
    <div className="flex gap-6">
      <div className="w-2/5 bg-[#FA7C54E5] p-8 text-white rounded-lg flex flex-col gap-2">
        <h3 className="text-2xl">Today's Quoote</h3>
        <p className="text-lg">
          “There is more treasure in books than in all the pirate’s loot on
          Treasure Island.”
        </p>
        <p className="text-left ">-Wait Disney</p>
        <div className="flex gap-4">
          {Array(5).fill(
            <p className="border-white  border-1 p-1 bg-gray-500 rounded-full "></p>
          )}
        </div>
      </div>
      <div className="w-3/5 border-2 p-8">New</div>
    </div>
  );
};

export default HomeBanner;
