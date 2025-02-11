"use client"

import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";

import { FormProps, InputFields } from "@/types";
import { schemaMapping } from "@/schemas/map"
import { TextInput } from "./inputs/text";
import RadioGroup from "./inputs/radio";
import { TextareaInput } from "./inputs/textarea";
import { CheckboxInput } from "./inputs/checkbox";
import { Button } from "./inputs/button";

export function DynamicForm({ formInputFields, schema }: FormProps) {
    const Schema = schemaMapping[schema]
    type Type = z.infer<typeof Schema>

    const methods = useForm<Type>({
        resolver: zodResolver(Schema)
    })
    const { register, handleSubmit } = methods

    const renderInput = ([key, value]: [keyof Type, InputFields]) => {
        switch (value.type) {
            case "text":
                return <TextInput key={key} id={key} {...register(key as keyof Type)} {...value}/>
            case "textarea":
                return <TextareaInput key={key} id={key} {...register(key as keyof Type)} {...value}/>
            case "checkbox":
                return <CheckboxInput key={key} id={key} {...register(key as keyof Type)} {...value}/>
            case "radio":
                return <RadioGroup key={key} id={key} {...register(key as keyof Type)} {...value}/>
            default:
                return <div>Unknown Type</div>
        }
    }

    const handler = (data: Type) => {
        console.log(data)
    }

    return (
        <FormProvider {...methods}>
            <form className="flex flex-col gap-300" onSubmit={handleSubmit(handler)}>
                {Object.entries(formInputFields).map(([key, value]) => renderInput([key as keyof Type, value]))}
                <Button text="Submit" type="submit"/>
            </form>
        </FormProvider>
    )
}
