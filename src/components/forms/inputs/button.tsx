import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils";

export function Button({ text, ...rest }: { text: string } & ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button className={cn("bg-green-600 py-200 text-body-md font-bold text-white rounded-lg hover:opacity-50")} {...rest}>{text}</button>
}