import { Button } from "./ui/button";

interface CardProps {
  title?: string;
    description?: string;
  date?: string;
}

export default function Card({ title, description, date }: CardProps) {
  return (
    <div className="border rounded-xl p-4 shadow-md">
      <div className="flex flex-col">
        <h1 className="font-semibold text-xl mb-2 text-neutral-800">{title}</h1>
        <h2 className="mb-2 text-sm text-neutral-500">{date}</h2>
        <p className="mb-2 text-sm text-neutral-800">{description}</p>
      </div>
      <Button className="w-full p-6 bg-indigo-500 cursor-pointer">Visualizar task</Button>
    </div>
  );
}
