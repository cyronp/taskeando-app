interface CardContainerTitleProps {
  title?: string;
  color?: string;
  quantity?: string;
}

export default function CardContainerTitle({
  title,
  color,
  quantity,
}: CardContainerTitleProps) {
  return (
    <div
      className="flex w-full justify-between rounded-sm px-6 py-2"
      style={{ backgroundColor: `${color}80` }}
    >
      <h1 className="font-bold truncate">{title}</h1>
      <h2
        className="px-2 rounded-sm text-white"
        style={{ backgroundColor: color }}
      >
        {quantity}
      </h2>
    </div>
  );
}
