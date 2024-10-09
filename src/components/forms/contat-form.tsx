'use client'

import { useFormState } from "react-dom";
import { ContacUsFormAction } from "@/actions";
import { ActionResponse, ContactUsFormType } from "@/types";
import { TextInput } from "./inputs/text";
import RadioGroup from "./inputs/radio";
import { TextareaInput } from "./inputs/textarea";
import { CheckboxInput } from "./inputs/checkbox";
import { Button } from "./inputs/button";

export function ContactForm() {
    const [state, action ] = useFormState<ActionResponse<ContactUsFormType>, FormData>(ContacUsFormAction, {})

    return (
        <form action={action} className="flex flex-col gap-300">
            <div className="flex justify-between gap-200">
                <TextInput label="First Name" required id="first_name" name="first_name" stateMsg={state.error?.first_name as string}/>
                <TextInput label="Last Name" required id="last_name" name="last_name" stateMsg={state.error?.last_name as string}/>
            </div>
            <TextInput label="Email Address" required id="email" name="email" stateMsg={state.error?.email as string}/>
            <RadioGroup legend="Query Type" required stateMsg={state.error?.query_type && state.error.query_type as string}>
                <RadioGroup.Option label="General Enquiry" id="general_enquiry" value="general_enquiry" name="query_type"/>
                <RadioGroup.Option label="Support Request" id="support_request" value="support_request" name="query_type"/>
            </RadioGroup>
            <TextareaInput label="Message" required stateMsg={state.error?.message && state.error.message as string}/>
            <CheckboxInput label="I consent to being contacted by the team" required stateMsg={state.error?.consent && state.error.consent as string}/>
            <Button text="Submit" type="submit"/>
        </form>
    )
}
