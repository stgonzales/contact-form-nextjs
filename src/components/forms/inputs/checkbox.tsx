"use client"

import { useFormContext } from "react-hook-form";

import { CheckboxType } from "@/types";

export function CheckboxInput({ label, required, ...rest }: Omit<CheckboxType, "type">) {
    const { formState } = useFormContext()
    
    return (
        <div className="flex flex-col gap-100">
            <div className="flex items-center gap-200">
                <input type="checkbox" id="consent" name="consent"/>
                {label && <label htmlFor="consent">{label}{required && <span className="pl-100 text-green-600 w-[18px] h-[18px]">*</span>}</label>}
            </div>
            {required && formState.errors[rest.name!] && <span className={"text-red"}>{formState.errors[rest.name!]?.message?.toString()}</span>}
        </div>
    )
}