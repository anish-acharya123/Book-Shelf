import { useSearchParams, useNavigate } from "react-router-dom";
import { Booklist } from "../../constant/Booklist";
import { tableHeading } from "../../constant/Tableinfo";
import { Icon } from "@iconify/react";
import ButtonComponent from "../Button/Button";
import { TableTh, TableTR } from "./TableElements";

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  console.log(searchQuery);

  const handlePreview = (value: string | undefined) => {
    navigate(value || "");
  };

  return (
    <div className="overflow-y-scroll h-[75vh] no-scrollbar ">
      <table className=" w-full  border-collapse">
        <thead>
          <TableTR
            items={tableHeading}
            renderItem={(item) => (
              <TableTh
                label={item.label}
                id={item.id}
                className="text-start py-2"
              />
            )}
          />
        </thead>
        <tbody className="space-y-4">
          {Booklist.map((item) => (
            <tr className="">
              <td className="flex  gap-4  w-fit py-4 ">
                <figure>
                  <img src={item.img} alt="" className="h-32 w-32" />
                </figure>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p>
                    <span>{item.author}</span>, <span>{item.date}</span>
                  </p>
                  <p className="text-sm">Second Edition</p>
                </div>
              </td>
              <td>
                <p className="w-full">
                  {item.rate} <span className="text-gray-400">/5</span>
                </p>
              </td>
              <td>
                <p className="text-lg">Computer Science</p>
                <p className="text-sm">UX Design</p>
              </td>
              <td>
                <div>
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
              </td>
              <td>
                <div className="flex flex-col justify-between">
                  <button className="bg-green-500 px-4 w-fit py-1 text-white text-sm rounded-md">
                    <span>E - Book</span>
                  </button>
                  <p>
                    <Icon
                      icon="typcn:location"
                      className="text-red-500 inline mr-2  h-6"
                    />
                    <span className="text-sm">CS A-15</span>
                  </p>
                </div>
              </td>
              <td>
                <Icon icon="ph:heart-fill" className="text-red-600" />
              </td>
              <td>
                <ButtonComponent
                  label="Preview"
                  onClick={handlePreview}
                  value={`/book/${item.id}`}
                  className="py-1 px-3 border-2 border-red-300 text-red-300 rounded-md"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchPage;
