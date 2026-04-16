import { EllipsisVerticalIcon, PencilIcon, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

interface CardProps {
  id: string | number;
  title?: string;
  description?: string;
  date?: string;
  removeCard?: (id: string | number) => void;
}

export default function Card({
  id,
  title,
  description,
  date,
  removeCard,
}: CardProps) {
  return (
    <div className="min-w-0 border rounded-xl p-4 shadow-md">
      <div className="min-w-0 flex flex-col">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl mb-2 text-neutral-800">
            {title}
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <EllipsisVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <PencilIcon />
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() => removeCard?.(id)}
                >
                  <TrashIcon />
                  Deletar
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <h2 className="mb-2 text-sm text-neutral-500">{date}</h2>
        <p className="mb-2 text-sm text-neutral-800 whitespace-pre-wrap wrap-break-word">
          {description}
        </p>
      </div>
    </div>
  );
}
