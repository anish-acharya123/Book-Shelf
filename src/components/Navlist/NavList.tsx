import { Icon } from "@iconify/react";

export type NavListProps = {
  id: number;
  iconText: string;
  label: string;
  IconClass: string;
  LinkClass: string;
};

export function NavItem({
  iconText,
  label,
  IconClass,
  LinkClass,
}: NavListProps) {
  <div>
    <Icon icon={iconText} className={IconClass} />
    <a href="" className={LinkClass}>
      {label}
    </a>
  </div>;
}
