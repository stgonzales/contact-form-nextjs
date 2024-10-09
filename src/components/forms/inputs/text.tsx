import { DefaultInputType } from "@/types"
import { cn } from "@/utils"

export function TextInput({ label, stateMsg, required, ...rest }: DefaultInputType) {
    return (
        <div className="flex flex-col gap-100 text-body-sm flex-1">
            {label && <label htmlFor={rest.name}>{label}{required && <span className="pl-100 text-green-600">*</span>}</label>}
            <input type="text" {...rest} className={cn("rounded-lg border border-grey-500 py-150 px-300 text-body-md text-grey-900 hover:cursor-pointer focus:outline-green-600", [required && stateMsg && "border-red"])}/>
            {required && stateMsg && <span className={"text-red"}>{stateMsg}</span>}
        </div>
    )
}