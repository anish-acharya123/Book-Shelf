import React from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactElement;
  className: string;
};

export function ListComponent<T>({
  items,
  renderItem,
  className,
}: ListProps<T>) {
  return <ul className={className}>{items.map(renderItem)}</ul>;
}
