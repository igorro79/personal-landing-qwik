import { component$ } from "@builder.io/qwik";

import {
  useForm,
  email,
  required,
  // type SubmitHandler,
  // formAction$,
} from "@modular-forms/qwik";
// import { useContext } from "@builder.io/qwik";
// import { IsOpenedContext } from "~/root";

// import { TextInput } from "~/components/form/TextInput";
// import { FileInput } from "~/components/form/FileInput";
// import { CategoryCheckbox } from "~/components/FormCategoryCheckbox";
// import { ActionButton } from "~/components/button/ActionButton";
import {
  type ContactForm,
  useContactFormLoader,
  // type ContactResponse,
} from "~/routes/layout";

// list of categories should be loadded from DB on SSR (or remain static ??? + languages)
// import categories from "~/data/categories.json";
import clsx from "clsx";
import { TextInput } from "../form/TextInput";
// import { FileInput } from "../form/FileInput";
// import { CategoryCheckbox } from "../FormCategoryCheckbox";
import { ActionButton } from "../button/ActionButton";

type ContactFormTypes = {
  class?: string;
};

// const delay = $((ms: number) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// });

// export const useFormAction = formAction$<ContactForm>((value: any) => {
//   console.log(value.email);
// });
// export const useSendDataToServer = formAction$<ContactForm, ContactResponse>(
//   (values: any) => {
//     return {
//       status: "success",
//       message: "Data sent successfully",
//       data: values,
//     };
//   }
// );

export default component$(({ class: className }: ContactFormTypes) => {
  // const isOpened = useContext(IsOpenedContext);

  const [contactForm, { Form, Field }] = useForm<ContactForm>({
    loader: useContactFormLoader(),
  });

  // form submit handler
  // const handleSubmit: SubmitHandler<ContactForm> = $(async (values: any) => {
  //   try {
  //     await delay(3000);
  //     console.log(values);
  //     if (isOpened.form) isOpened.form = false;
  //     //TODO notifier of success needed
  //   } catch (error) {
  //     console.log(error);
  //     //TODO notifier of error needed
  //   }
  // });

  return (
    <Form
      encType="multipart/form-data"
      class={clsx(
        "flex flex-col xl:mr-[26px] xl:basis-[64%] xl:pt-[28px] 2xl:mr-[70px] 2xl:basis-1/2 2xl:pt-[65px]",

        className
      )}
      onSubmit$={(val) => console.log(val)}
      // onSubmit$={handleSubmit}
    >
      <div class="flex flex-col ">
        <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4">
          <Field name="name" validate={[required("Please enter your name.")]}>
            {(field, props) => (
              <TextInput
                {...props}
                value={field.value}
                error={field.error}
                type="text"
                label="name"
              />
            )}
          </Field>

          <Field
            name="email"
            validate={[
              required("Please enter your name."),
              email("The email address is badly formatted."),
            ]}
          >
            {(field, props) => (
              <TextInput
                {...props}
                value={field.value}
                error={field.error}
                type="email"
                label="Email"
                required
              />
            )}
          </Field>
        </div>

        <Field name="message">
          {(field, props) => (
            <TextInput
              {...props}
              value={field.value}
              error={field.error}
              type="text"
              label="message"
            />
          )}
        </Field>

        <div class="lg:flex lg:justify-between">
          <ActionButton
            type="submit"
            loading={contactForm.submitting}
            variant="submit"
            label="submit"
          />
          {contactForm.response.status === "success" && (
            <div>{"contactForm"}</div>
          )}
        </div>
      </div>
    </Form>
  );
});
