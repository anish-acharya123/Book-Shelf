import img from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { NavItem, NavListProps } from "../Navlist/NavList";
import { ListComponent } from "../Navlist/NavListItem";

const Navbar = () => {
  const NavData: NavListProps[] = [
    {
      id: 1,
      iconText: "mdi:home",
      label: "Home",
      IconClass: "h-6 w-6",
      LinkClass: "font-medium",
    },
    {
      id: 2,
      iconText: "ion:search",
      label: "Search",
      IconClass: "h-6 w-6",
      LinkClass: "font-medium",
    },
    {
      id: 3,
      iconText: "mingcute:book-5-line",
      label: "My Shelf",
      IconClass: "h-6 w-6",
      LinkClass: "font-medium",
    },
  ];

  return (
    <nav className=" w-1/6 p-5 flex flex-col justify-between items-center">
      <div className="flex flex-col gap-20 justify-center items-start">
        <figure>
          <Link to="/">
            <img src={img} alt="" className="h-20 w-32" />
          </Link>
        </figure>

        <ListComponent
          items={NavData}
          renderItem={(item) => (
            <li key={item.id} className="flex items-center  gap-2">
              <NavItem
                id={item.id}
                iconText={item.iconText}
                label={item.label}
                IconClass={item.IconClass}
                LinkClass={item.LinkClass}
              />
            </li>
          )}
        />
      </div>
      <div className="text-gray-400">
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Terms & Condition</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
