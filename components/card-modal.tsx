import { Button } from "./ui/button";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

export default function CardModal(){
    return(
        <>
            <div className="absolute bg-white right-12 top-16 p-6 border rounded-md">
                <form id="add-card" className="flex flex-col gap-2">
                    <Field>
                        <FieldLabel htmlFor="card-title">Titulo da task</FieldLabel>
                        <Input id="card-title" type="text" placeholder="Insira o titulo da task"></Input>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="card-description">Descrição da task</FieldLabel>
                        <Input id="card-description" type="text" placeholder="Insira a descrição da task"></Input>
                    </Field>
                </form>
                <div className="flex gap-2 pt-2">
                    <Button type="submit" className="border-indigo-300 bg-transparent text-black cursor-pointer flex-1">Cancelar</Button>
                    <Button type="submit" className="bg-indigo-500 cursor-pointer flex-1">Criar task</Button>
                </div>
            </div>
        </>
    )
}