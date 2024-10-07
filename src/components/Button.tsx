type ButtonProps<T> = {
  label: string;
  onClick: (value?: T) => void;
  value?: T;
  className: string;
};

export default function ButtonComponent<T>({
  label,
  onClick,
  value,
  className,
}: ButtonProps<T>) {
  return (
    <button onClick={() => onClick(value)} className={className}>
      {label}
    </button>
  );
}
