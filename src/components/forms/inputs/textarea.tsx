"use client"

import { useFormContext } from "react-hook-form";

import { TextareaInputType } from "@/types";
import { cn } from "@/utils";

export function TextareaInput({ label, required, ...rest}: Omit<TextareaInputType, "type">) {
    const { formState } = useFormContext()
        
    return (
        <div className="flex flex-col gap-100 text-body-sm flex-1">
            { label && <label htmlFor="message">{label}{ required && <span className="pl-100 text-green-600">*</span>}</label>}
            <textarea id="message" name="message" className={cn("rounded-lg border border-grey-500 py-150 px-300 text-body-md text-grey-900 hover:cursor-pointer focus:outline-green-600", [required && formState.errors[rest.name!] && "border-red"])}/>
            {required && formState.errors[rest.name!] && <span className={"text-red"}>{formState.errors[rest.name!]?.message?.toString()}</span>}
        </div>
    )
}