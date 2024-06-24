"use server"

import { ContactUsSchema } from "@/schemas";
import { ActionResponse, ContactUsFormType } from "@/types";
import { redirect } from "next/navigation";

import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export async function ContacUsFormAction(state: ActionResponse<ContactUsFormType>, payload: FormData): Promise<ActionResponse<ContactUsFormType>> {
    
    const validated = ContactUsSchema.safeParse({
        first_name: payload.get('first_name'),
        last_name: payload.get('last_name'),
        email: payload.get('email'),
        query_type: payload.get('query_type'),
        message: payload.get('message'),
        consent: payload.get('consent')
    })
    
    if (!validated.success) {
         return {
            message: 'error',
            error: validated.error.flatten().fieldErrors
        }
    }

    await prisma.contactUs.create({
        data: {
            fisrt_name: validated.data.first_name,
            last_name: validated.data.last_name,
            email: validated.data.email,
            query_type: validated.data.query_type,
            message: validated.data.message,
            consent: validated.data.consent
        }
    })
    
    return redirect('/thank-you')
}