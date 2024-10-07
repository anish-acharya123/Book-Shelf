import React from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactElement;
};

export function ListComponent<T>({ items, renderItem }: ListProps<T>) {
  return <ul className="flex flex-col gap-4">{items.map(renderItem)}</ul>;
}
