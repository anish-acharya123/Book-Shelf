import { Booklist } from "../constant/Booklist";
import { useParams, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import img from "../assets/man.jpeg";
import ButtonComponent from "./Button/Button";

const EachbookDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const book = Booklist.filter((item) => item.id === Number(id));

  const handlebtn = (vlaue: number | undefined) => {
    console.log(vlaue);
  };

  const handlBackbtn = (value: number | undefined) => {
    console.log(value);
    navigate("/home");
  };

  return (
    <>
      <ButtonComponent
        onClick={handlBackbtn}
        label="←  Back to result"
        className="text-left w-fit"
      />

      <div className="flex justify-between mt-4">
        <div className="flex gap-16 w-4/6 ">
          <div className="bg-white max-w-[20rem] flex rounded-xl  h-full flex-col justify-center items-center gap-4 p-4 px-8 shadow-md">
            <figure>
              <img
                src={book[0].img}
                alt="img"
                className="h-72 w-52 rounded-lg"
              />
            </figure>
            <div className="flex justify-between w-full">
              <p className="flex flex-col justify-center items-center">
                <Icon
                  icon="material-symbols:comment-outline"
                  className="h-6 w-6 text-gray-500"
                />

                <span className="font-medium text-sm">Review</span>
              </p>
              <p className="flex flex-col justify-center items-center">
                <Icon
                  icon="simple-line-icons:note"
                  className="h-6 w-6 text-gray-500"
                />

                <span className="font-medium text-sm">Note</span>
              </p>
              <p className="flex flex-col justify-center items-center">
                <Icon
                  icon="material-symbols:share-outline"
                  className="h-6 w-6 text-gray-500"
                />

                <span className="font-medium text-sm">Share</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between text-gray-700 ">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl">{book[0].name}</h2>
              <p className="text-gray-500">
                By {book[0].author}, {book[0].date}
              </p>
              <p className="text-gray-400">Second Edition</p>
            </div>
            <div className="flex  gap-10">
              <p className="flex gap-1  items-center">
                {Array(5).fill(<Icon icon="emojione:star" />)}
                <span className="">{book[0].rate} Rating</span>
              </p>
              <p>25 Currently reading</p>
              <p>119 Have read</p>
            </div>
            <div className="flex gap-10">
              <div>
                <h4 className="font-medium">Availability</h4>
                <p>
                  <Icon
                    icon="icon-park-solid:check-one"
                    className="text-green-500 inline mr-2"
                  />
                  <span>Hard Copy</span>
                </p>
                <p>
                  <Icon
                    icon="icon-park-solid:check-one"
                    className="text-green-500 inline mr-2"
                  />
                  <span>E - Book</span>
                </p>
                <p>
                  <Icon
                    icon="icon-park-solid:check-one"
                    className="text-green-500 inline mr-2"
                  />
                  <span>Audio Book</span>
                </p>
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="font-medium">Status</h4>

                <button className="bg-green-500 px-2 py-1 text-white text-sm rounded-md">
                  <span>E - Book</span>
                </button>
                <p>
                  <Icon
                    icon="typcn:location"
                    className="text-red-500 inline mr-2 w-6 h-6"
                  />
                  <span>CS A-15</span>
                </p>
              </div>
            </div>
            <div>
              <ButtonComponent
                label="borrow"
                className="uppercase  py-4 px-16 border-none bg-[#F27851] text-white text-lg font-medium"
                onClick={handlebtn}
                value={5}
              />
              <ButtonComponent
                label=" read now"
                className="uppercase  ml-10  py-4 px-16 border-none bg-green-500 text-white text-lg font-medium"
                onClick={handlebtn}
                value={5}
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg w-2/6 p-4 gap-4 flex flex-col justify-between">
          <h2 className="text-3xl font-medium ">
            <span className="text-[#F27851]">About</span> Author
          </h2>
          <p className="text-2xl flex items-center gap-16">
            <span>{book[0].author}</span>
            <figure>
              <img src={img} alt="" className="h-24 w-24" />
            </figure>
          </p>
          <p className="text-[14px]">
            <span>{book[0].author}</span> is a usability consultant who has more
            than 30 years of experience as a user advocate for companies like
            Apple, Netscape, AOL, Lexus, and others. Based in part on the
            success of his first book, Don't Make Me Think, he has become a
            highly sought-after speaker on usability design.
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-medium">Other Book</p>
            <p className="flex gap-4">
              <figure>
                <img src={book[0].img} alt="" className="h-20 w-20" />
              </figure>
              <figure>
                <img src={book[0].img} alt="" className="h-20 w-20" />
              </figure>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EachbookDetail;
