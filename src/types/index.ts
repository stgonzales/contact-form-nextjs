import { schemaMapping } from "@/schemas/map"
import { InputHTMLAttributes, Ref, TextareaHTMLAttributes } from "react"
import { z } from "zod"

export type ActionResponse<T> = {
    message?: string
    data?: T
    error?: Record<string, string | string[]>
}

// -------

export type DefaultInputType = {
    label: string
    stateMsg?: string
    ref?: Ref<HTMLInputElement>
}

export type TextInputType = DefaultInputType & {
    type: "text"
} & InputHTMLAttributes<HTMLInputElement>

export type TextareaInputType = DefaultInputType & {
    type: "textarea"
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export type CheckboxType = DefaultInputType & {
    type: "checkbox"
}& InputHTMLAttributes<HTMLInputElement>

export type RadioType = DefaultInputType & InputHTMLAttributes<HTMLInputElement>

export type RadioGroupType = {
    type: "radio"
    legend: string
    options: { [key: string]: RadioType }[]
    stateMsg?: string
    required?: boolean
}

export type InputFields = TextInputType | TextareaInputType | CheckboxType | RadioGroupType

export type FormInputFieldsType = {
    [key: string]: InputFields
}

export type FormProps = {
    formInputFields: FormInputFieldsType
    schema: keyof typeof schemaMapping
}