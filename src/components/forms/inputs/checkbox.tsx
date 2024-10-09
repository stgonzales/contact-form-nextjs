import { DefaultInputType } from "@/types";

export function CheckboxInput({ label, required, stateMsg }: Omit<DefaultInputType, "type">) {
    return (
        <div className="flex flex-col gap-100">
            <div className="flex items-center gap-200">
                <input type="checkbox" id="consent" name="consent"/>
                {label && <label htmlFor="consent">{label}{required && <span className="pl-100 text-green-600 w-[18px] h-[18px]">*</span>}</label>}
            </div>
            {required && stateMsg && <span className={"text-red"}>{stateMsg}</span>}
        </div>
    )
}