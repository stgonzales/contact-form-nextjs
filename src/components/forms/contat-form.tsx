'use client'

import { useFormState } from "react-dom";
import { ContacUsFormAction } from "@/actions";
import { ActionResponse, ContactUsFormType } from "@/types";
import { cn } from "@/utils";

export function ContactForm() {
    const [state, action ] = useFormState<ActionResponse<ContactUsFormType>, FormData>(ContacUsFormAction, {})

    return <form action={action} className="flex flex-col gap-300">
        <div className="flex justify-between gap-200">
            <div className="flex flex-col gap-100 text-body-sm flex-1">
                <label htmlFor="first_name">General Enquiry<span className="pl-100 text-green-600">*</span></label>
                <input type="text" name="first_name" id="first_name" className={cn("rounded-lg border border-grey-500 py-150 px-300 text-body-md text-grey-900 hover:cursor-pointer focus:outline-green-600", [state.error?.first_name && "border-red"])}/>
                {state.error?.first_name && <span className={"text-red"}>{state.error.first_name}</span>}
            </div>
            <div className="flex flex-col gap-100 text-body-sm flex-1">
                <label htmlFor="last_name">Support Request<span className="pl-100 text-green-600">*</span></label>
                <input type="text" name="last_name" id="last_name" className={cn("rounded-lg border border-grey-500 py-150 px-300 text-body-md text-grey-900 hover:cursor-pointer focus:outline-green-600", [state.error?.last_name && "border-red"])}/>
                {state.error?.last_name && <span className={"text-red"}>{state.error.last_name}</span>}
            </div>
        </div>
        <div className="flex flex-col gap-100 text-body-sm flex-1">
            <label htmlFor="email">Email Address<span className="pl-100 text-green-600">*</span></label>
            <input type="text" name="email" id="email" placeholder="email@example.com" className={cn("rounded-lg border border-grey-500 py-150 px-300 text-body-md text-grey-900 hover:cursor-pointer focus:outline-green-600", [state.error?.email && "border-red"])}/>
            {state.error?.email && <span className={"text-red"}>{state.error?.email}</span>}
        </div>
        <fieldset>
            <div className="flex flex-col gap-200">
                <legend>Query Type<span className="pl-100 text-green-600 text-body-sm">*</span></legend>
                <div className="flex justify-between gap-200">
                    <div className="flex flex-1 items-center gap-150 text-body-md rounded-lg border border-grey-500 py-150 px-300 text-grey-900 hover:cursor-pointer focus:outline-green-600 has-[:checked]:bg-green-200 has-[:checked]:stroke-green-600">
                        <label htmlFor="general_enquiry" className="flex items-center gap-150">
                            <input className="w-[18px] h-[18px]" type="radio" id="general_enquiry" value="general_enquiry" name="query_type"/>
                            General Enquiry
                        </label>
                    </div>
                    <div className="flex flex-1 items-center gap-150 text-body-md rounded-lg border border-grey-500 py-150 px-300 text-grey-900 hover:cursor-pointer focus:outline-green-600 has-[:checked]:bg-green-200 has-[:checked]:stroke-green-600">
                        <label htmlFor="support_request" className="flex items-center gap-150">
                            <input className="w-[18px] h-[18px]" type="radio" id="support_request" value="support_request" name="query_type"/>
                            Support Request
                        </label>
                    </div>
                </div>
                {state.error?.query_type && <span className={"text-red"}>{state.error?.query_type}</span>}
            </div>
        </fieldset>
        <div className="flex flex-col gap-100 text-body-sm flex-1">
            <label htmlFor="message">Message<span className="pl-100 text-green-600">*</span></label>
            <textarea id="message" name="message" className={cn("rounded-lg border border-grey-500 py-150 px-300 text-body-md text-grey-900 hover:cursor-pointer focus:outline-green-600", [state.error?.message && "border-red"])}/>
            {state.error?.message && <span className={"text-red"}>{state.error?.message}</span>}
        </div>
        <div className="flex flex-col gap-100">
            <div className="flex items-center gap-200">
                <input type="checkbox" id="consent" name="consent"/>
                <label htmlFor="consent">I consent to being contacted by the team<span className="pl-100 text-green-600 w-[18px] h-[18px]">*</span></label>
            </div>
            {state.error?.consent && <span className={"text-red"}>{state.error?.consent}</span>}
        </div>
        <button className={cn("bg-green-600 py-200 text-body-md font-bold text-white rounded-lg hover:opacity-50")}>Submit</button>
    </form>
}
