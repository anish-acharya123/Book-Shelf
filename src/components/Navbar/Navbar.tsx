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

  const FooterData: NavListProps[] = [
    { id: 1, label: "About" },
    { id: 2, label: "Support" },
    { id: 3, label: "Terms and Condition" },
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
          className="flex flex-col gap-4"
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
        <ListComponent
          className="flex flex-col gap-4"
          items={FooterData}
          renderItem={(item) => (
            <li key={item.id}>
              <NavItem id={item.id} label={item.label} />
            </li>
          )}
        />
      </div>
    </nav>
  );
};

export default Navbar;
