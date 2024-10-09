import { DefaultInputType } from "@/types";
import { cn } from "@/utils";

export function TextareaInput({ label, required, stateMsg }: DefaultInputType) {
    return (
        <div className="flex flex-col gap-100 text-body-sm flex-1">
            { label && <label htmlFor="message">{label}{ required && <span className="pl-100 text-green-600">*</span>}</label>}
            <textarea id="message" name="message" className={cn("rounded-lg border border-grey-500 py-150 px-300 text-body-md text-grey-900 hover:cursor-pointer focus:outline-green-600", [required &&stateMsg && "border-red"])}/>
            {required && stateMsg && <span className={"text-red"}>{stateMsg}</span>}
        </div>
    )
}