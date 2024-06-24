import { z } from 'zod'

export const ContactUsSchema = z.object({
    first_name: z.string().min(1, {
        message: "This field is required"
    }),
    last_name: z.string().min(1, {
        message: "This field is required"
    }),
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    query_type: z.enum(['general_enquiry', 'support_request'], {
        message: "Please select a query type"
    }),
    message: z.string().min(1, {
        message: "This field is required"
    }),
    consent: z.string().nullable().transform(v => v ? true : false).refine(v => !!v, {
        message: "To submit this form, please consent to being contacted"
    })
})