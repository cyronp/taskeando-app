interface CardModalProps{
    closeColumnModal: () => void;
}

import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import CardContainerTitle from "./card-container-title";
import { useState } from "react";

export default function ColumnModal({closeColumnModal}:CardModalProps){
    const [activeColor, setActiveColor] = useState('')
    const [activeTitle, setActiveTitle] = useState('')
    return(
        <>
            <div className="absolute bg-white right-12 top-16 p-6 border rounded-md w-[20%]">
                <div className="absolute top-2 right-2">
                <Button variant="ghost" onClick={closeColumnModal} className="hover:bg-transparten cursor-pointer">
                    <X/>
                </Button>
                </div>
                <form id="add-column" className="flex flex-col gap-2">
                    <Field>
                        <FieldLabel htmlFor="column-title">Titulo da coluna</FieldLabel>
                        <Input id="column-title" type="text" placeholder="Insira o titulo da task" onChange={(e) => setActiveTitle(e.target.value)}></Input>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="column-color">Selecione a cor da coluna</FieldLabel>
                        <Input type="color" onChange={(e) => setActiveColor(e.target.value)}></Input>
                    </Field>
                </form>
                <div className="flex flex-col mt-2">
                    <h1 className="text-sm font-medium">Preview</h1>
                    <CardContainerTitle color={activeColor} title={activeTitle} quantity="999"/>
                </div>
                <div className="flex gap-2 pt-4">
                    <Button type="submit" className="bg-indigo-500 cursor-pointer flex-1 py-5">Criar coluna</Button>
                </div>
            </div>
        </>
    )
}