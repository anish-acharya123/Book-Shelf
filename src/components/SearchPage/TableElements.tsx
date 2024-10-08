type TableTR<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

export function TableTR<T>({ items, renderItem }: TableTR<T>) {
  return <tr className="">{items.map(renderItem)}</tr>;
}

type Tableth = {
  label: string;
  id: number;
  className: string;
};

export function TableTh({ label, id, className }: Tableth) {
  return (
    <th className={className} key={id}>
      {label}
    </th>
  );
}
