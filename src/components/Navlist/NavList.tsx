import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export type NavListProps = {
  id: number;
  iconText?: string;
  label: string;
  IconClass?: string;
  LinkClass?: string;
};

export function NavItem({
  iconText,
  label,
  IconClass,
  LinkClass,
}: NavListProps) {
  return (
    <>
      <Icon icon={iconText || ""} className={IconClass} />
      <Link to={"/home"} className={LinkClass}>
        {label}
      </Link>
    </>
  );
}
