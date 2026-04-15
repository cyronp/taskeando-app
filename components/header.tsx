import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface HeaderProps {
  workspace?: string;
  onCreateTask: () => void;
}

export default function Header({ workspace, onCreateTask }: HeaderProps) {
  const [IsActive, setIsActive] = useState(false);
  return (
    <>
      <div className="flex px-10 py-2 items-center justify-between">
        {/* Icon */}
        <div className="flex gap-12 items-center">
          <h1 className="text-indigo-500 text-4xl font-bold">Taskeando</h1>
          {/* Workspace */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-700">Workspace: {workspace}<Button className="hover:bg-transparent cursor-pointer" size="icon" variant="ghost"><ChevronDown/></Button></h2>
          </div>
        </div>
        {/* Buttons Group */}
        <div className="flex gap-4">
          <Button className="bg-indigo-500 rounded-lg p-6 text-base font-bold cursor-pointer">Criar categoria</Button>
          <Button className="bg-indigo-500 rounded-lg p-6 text-base font-bold cursor-pointer" onClick={onCreateTask}>Criar task</Button>
        </div>
      </div>
    </>
  );
}
