import { ReactNode } from "react";
import CardContainerTitle from "./card-container-title";

interface CardContainerProps {
  title?: string;
  color?: string;
  quantity?: string;
  children?: ReactNode;
}

export default function CardContainer({
  title,
  quantity,
  color,
  children,
}: CardContainerProps) {
  return (
    <div className="flex w-80 shrink-0 flex-col gap-2">
      <CardContainerTitle title={title} quantity={quantity} color={color} />
      {children ? <div className="flex flex-col gap-4">{children}</div> : null}
    </div>
  );
}
