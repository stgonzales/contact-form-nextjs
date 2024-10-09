import { DefaultInputType, RadioGroupType } from "@/types";

function RadioInput({ label, ...rest }: DefaultInputType) {
    return (
        <div className="flex flex-1 items-center gap-150 text-body-md rounded-lg border border-grey-500 py-150 px-300 text-grey-900 hover:cursor-pointer focus:outline-green-600 has-[:checked]:bg-green-200 has-[:checked]:stroke-green-600">
            <label htmlFor={rest.id} className="flex items-center gap-150">
                <input className="w-[18px] h-[18px]" type="radio" {...rest}/>
                {label}
            </label>
        </div>
    )
}

export default function RadioGroup({ children, legend, stateMsg, required }: Omit<RadioGroupType, "options">) {
    return (
        <fieldset>
            <div className="flex flex-col gap-200">
                {legend && <legend>{legend}{required && <span className="pl-100 text-green-600 text-body-sm">*</span>}</legend>}
                <div className="flex justify-between gap-200">
                    {children}
                </div>
                {required && stateMsg && <span className={"text-red"}>{stateMsg}</span>}
            </div>
        </fieldset>
    )
}

RadioGroup.Option = RadioInput