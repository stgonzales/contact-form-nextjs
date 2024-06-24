import { ContactUsSchema } from "@/schemas"
import { z } from "zod"

export type ActionResponse<T> = {
    message?: string
    data?: T
    error?: Record<string, string | string[]>
}

export type ContactUsFormType = z.infer<typeof ContactUsSchema>