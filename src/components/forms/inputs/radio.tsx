"use client"

import { useFormContext } from "react-hook-form";

import { RadioType,  RadioGroupType } from "@/types";

function RadioInput({ label, ...rest }: RadioType) {
    return (
        <div className="flex flex-1 items-center gap-150 text-body-md rounded-lg border border-grey-500 py-150 px-300 text-grey-900 hover:cursor-pointer focus:outline-green-600 has-[:checked]:bg-green-200 has-[:checked]:stroke-green-600">
            <label htmlFor={rest.id} className="flex items-center gap-150">
                <input className="w-[18px] h-[18px]" type="radio" {...rest}/>
                {label}
            </label>
        </div>
    )
}

export default function RadioGroup({ name, options, legend, required }: { id: string; name: string } & RadioGroupType) {
    const { formState } = useFormContext()

    return (
        <fieldset>
            <div className="flex flex-col gap-200">
                {legend && <legend>{legend}{required && <span className="pl-100 text-green-600 text-body-sm">*</span>}</legend>}
                <div className="flex justify-between gap-200">
                    {options.map((o, i) => Object.entries(o).map(([key, value]) => (<RadioInput key={key} name={name} {...value}/>)))}
                </div>
                {required && formState.errors[name] && <span className={"text-red"}>{formState.errors[name]?.message?.toString()}</span>}
            </div>
        </fieldset>
    )
}

RadioGroup.Option = RadioInput