interface CardModalProps{
    closeModal: () => void;
}

import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectGroup } from "./ui/select";
import { boardSeed } from "../lib/board-seed";
import Card from "./card";
import { useState } from "react";

export default function CardModal({closeModal}:CardModalProps){
    const [activeTitle, setActiveTitle] = useState('')
    const [activeDescription, setActiveDescription] = useState('')
    const [activeDate, setActiveDate] = useState('')
    return(
        <>
            <div className="absolute bg-white right-12 top-16 p-6 border rounded-md w-[20%]">
                <div className="absolute top-2 right-2">
                <Button variant="ghost" onClick={closeModal} className="hover:bg-transparten cursor-pointer">
                    <X/>
                </Button>
                </div>
                <form id="add-card" className="flex flex-col gap-2">
                    <Field>
                        <FieldLabel>Selecione a coluna desejada</FieldLabel>
                        <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione a coluna"/>
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectGroup>
                                <SelectLabel>Colunas</SelectLabel>
                                {boardSeed.map((column) => <SelectItem key={column.title} value={column.title}>{column.title}</SelectItem>)}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="card-title">Titulo da task</FieldLabel>
                        <Input id="card-title" type="text" placeholder="Insira o titulo da task" onChange={(e) => {setActiveTitle(e.target.value)}}></Input>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="card-description">Descrição da task</FieldLabel>
                        <Input id="card-description" type="text" placeholder="Insira a descrição da task" onChange={(e) => {setActiveDescription(e.target.value)}}></Input>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="card-date">Data de finalização da task</FieldLabel>
                        <Input id="card-date" type="date" placeholder="Insira a data de finalização da task" onChange={(e) => {setActiveDate(e.target.value)}}></Input>
                    </Field>
                </form>
                <div className="flex gap-2 pt-4">
                    <Button type="submit" className="bg-indigo-500 cursor-pointer flex-1">Criar task</Button>
                </div>
                <div>
                    <h1 className="text-sm font-medium">Preview</h1>
                    <Card title={activeTitle} description={activeDescription} date={activeDate} />
                </div>
            </div>
        </>
    )
}