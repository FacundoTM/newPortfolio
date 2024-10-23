import RevealOnScroll from "./RevealOnScroll";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

("use client");

export default function Contact() {
  const SERVICE_ID = "service_4pxpp5b";
  const TEMPLATE_ID = "template_tf79odq";
  const PUBLIC_KEY = "vxMYMfRyECZxCCW4j";

  const handleOnSubmit = (values) => {
    console.log(values);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY).then(
      (result) => {
        // alert("Mensaje enviado correctamente.");
        toast.success("Mensaje enviado correctamente.");
      },
      (error) => {
        console.log(error.text);
        alert("Hubo un error.");
        toast.error("Hubo algún problema. Intenta nuevamente");
      }
    );
  };

  const mailSchema = Yup.object().shape({
    from_name: Yup.string()
      .min(2, "Nombre muy corto")
      .max(20, "Nombre muy largo")
      .required("Requerido"),
    reply_to: Yup.string().email("Mail invalido").required("Requerido"),
    message: Yup.string()
      .required("Requerido")
      .min(10, "Minimo 10 caracteres.")
      .max(300, "Maximo 300 caracteres."),
  });

  return (
    <div>
      <Toaster position="bottom-center" richColors />
      <div
        id="contacto"
        className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <RevealOnScroll>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Contacto
          </h2>
          <p className="mt-2 text-gray-600">
            Si deseas contactarme puedes hacerlo a tráves del formulario, o
            enviando un correo a{" "}
            <a className="text-[#0db75f]" href="mailto:tmfacundo@gmail.com">
              tmfacundo@gmail.com
            </a>
          </p>
        </RevealOnScroll>
      </div>
      <Formik
        initialValues={{ from_name: "", reply_to: "", message: "" }}
        validationSchema={mailSchema}
        onSubmit={(values, { resetForm }) => {
          handleOnSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="mx-auto max-w-xl p-4 sm:p-0">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <RevealOnScroll>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nombre
                  </label>
                  <div className="mt-2.5">
                    <Field
                      id="from_name"
                      name="from_name"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.from_name && touched.from_name ? (
                      <div>{errors.from_name}</div>
                    ) : null}
                  </div>
                </RevealOnScroll>
              </div>

              <div className="sm:col-span-2">
                <RevealOnScroll>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>

                  <div className="mt-2.5">
                    <Field
                      id="reply_to"
                      name="reply_to"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.reply_to && touched.reply_to ? (
                      <div>{errors.reply_to}</div>
                    ) : null}
                  </div>
                </RevealOnScroll>
              </div>

              <div className="sm:col-span-2">
                <RevealOnScroll>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Mensaje
                  </label>
                  <div className="mt-2.5">
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.message && touched.message ? (
                      <div>{errors.message}</div>
                    ) : null}
                  </div>
                </RevealOnScroll>
              </div>
            </div>
            <div className="mt-10">
              <RevealOnScroll>
                <button
                  type="submit"
                  className="transition duration-700 block w-full rounded-md bg-[#0db75f] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Enviar mensaje
                </button>
              </RevealOnScroll>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
