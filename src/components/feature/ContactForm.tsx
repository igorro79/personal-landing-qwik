import { component$ } from "@builder.io/qwik";

import {
  useForm,
  email,
  minLength,
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
import categories from "~/data/categories.json";
import clsx from "clsx";
import { TextInput } from "../form/TextInput";
import { FileInput } from "../form/FileInput";
import { CategoryCheckbox } from "../FormCategoryCheckbox";
import { ActionButton } from "../button/ActionButton";

type ContactFormTypes = {
  variant?: "dynamic" | "main";
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

export default component$(
  ({ variant = "main", class: className }: ContactFormTypes) => {
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
          variant === "main" &&
            "flex flex-col xl:mr-[26px] xl:basis-[64%] xl:pt-[28px] 2xl:mr-[70px] 2xl:basis-1/2 2xl:pt-[65px]",
          variant === "dynamic" && "pb-20 2xl:mr-[78px]",
          className
        )}
        onSubmit$={(val) => console.log(val)}
        // onSubmit$={handleSubmit}
      >
        {variant !== "main" && (
          <div class="mb-6 flex flex-wrap gap-[11px_11px] lg:mb-[46px]">
            {categories.map(({ label, value }) => (
              <Field key={value} name="categories" type="string[]">
                {(field, props) => (
                 
                  <CategoryCheckbox
                    {...props}
                    label={label}
                    value={value}
                    checked={field.value?.includes(value)}
                    error={field.error}
                  />
                )}
              </Field>
            ))}
          </div>
        )}
        <div class="flex flex-col ">
          <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4">
            <Field
              name="username"
              validate={[required("Please enter your name.")]}
            >
              {(field, props) => (
                
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="text"
                  label="Username"
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

            <Field
              name="phone"
              validate={[
                required("Please enter your phone."),
                minLength(8, "You phone must have 8 characters or more."),
              ]}
            >
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="tel"
                  label="phone"
                  required
                />
              )}
            </Field>

            <Field
              name="company"
              validate={[
                required("Please enter your company name."),
                minLength(3, "You phone must have 3 characters or more."),
              ]}
            >
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="text"
                  label="company name"
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

          <Field name="file" type="File">
            {(field, props) => (
              
              <FileInput
                {...props}
                value={field.value}
                error={field.error}
                label="Bifoga en fil"
              />
            )}
          </Field>

          <div class="lg:flex lg:justify-between">
            <div class="lg:w-[367px]">
              <p class="py-[24px] text-xs font-medium leading-4 text-middleGrey lg:pb-0">
                Genom att klicka på knappen "Skicka" samtycker du till
                behandling av personuppgifter.
                <a
                  class="pl-[10px] text-xs font-medium leading-4 text-[#00ffff] underline hover:text-linkActive active:text-linkActive"
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="read-more"
                >
                  Fler detaljer
                </a>
              </p>
            </div>

          
            <ActionButton
              type="submit"
              loading={contactForm.submitting}
              variant="submit"
              label="submit"
              class={variant === "main" ? "mx-auto mb-14 lg:mr-0 " : ""}
            />
            {contactForm.response.status === "success" && (
              <div>{"contactForm"}</div>
            )}
          </div>
        </div>
      </Form>
    );
  }
);
