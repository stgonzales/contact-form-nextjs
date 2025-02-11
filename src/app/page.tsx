import { DynamicForm } from "@/components/forms";
import { FormProps } from "@/types";

const formProps: FormProps = {
    schema: "contact_us",
    formInputFields: {
      first_name: {
          type: "text",
          label: "First Name",
          required: true,
      },
      last_name: {
          type: "text",
          label: "Last Name",
          required: true,
      },
      email: {
          type: "text",
          label: "Email",
          required: true,
      },
      query_type: {
          type: "radio",
          legend: "Query Type",
          options: [
              {
                general_enquiry: {
                  label: "General Enquiry",
                }
              },
              {
                support_request: {
                  label: "Support Request",
                }
              }
          ],
          required: true,
      },
      message: {
          type: "textarea",
          label: "Message",
          required: true,
      },
      consent: {
          type: "checkbox",
          label: "I consent to being contacted by the team",
          required: true,
      }
    }
}

export default function Home() {
  return (
    <>
      <h1 className="text-heading">Contact Us</h1>
      <DynamicForm {...formProps}/>
    </>
  );
}
