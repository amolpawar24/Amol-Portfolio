/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
//* 1.Global Packages
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//* 2.Component Imports 
import Loader from "@/components/Loader/Loader";
import ToastMessage from "@/components/Toasts/Toasts";
import AlertMessage from "@/components/Alerts/AlertMessage";

//? ================= YUP VALIDATION =================
const ContactSchema = Yup.object({

  from_name: Yup.string()
    .min(3, "Name is too short")
    .required("Name is required"),

  email_id: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  subject: Yup.string()
    .min(5, "Subject is too short")
    .required("Subject is required"),

  message: Yup.string()
    .min(10, "Message is too short")
    .required("Message is required"),
});

const Connect = () => {

  //* ================  states ===================
  const [loading, setLoading] = useState(false);

  //* ================= FORMIK INITIAL VALUES =================
  const initialValues = {
    from_name: "",
    email_id: "",
    subject: "",
    message: "",
  };

  //* ================= SEND EMAIL =================
  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: any

  ) => {

    if (loading) return;

    setLoading(true);

    try {

      //* ================= SEND EMAIL =================

      const response = await emailjs.send(

        "service_24",

        "template_24",

        {

          to_name: "Amol Pawar",

          from_name: values.from_name,

          email_id: values.email_id,

          subject: values.subject,

          message: values.message,
        },

        "7Ghg9djmLFK05zzsr"
      );

      //* ================= SUCCESS TOAST =================

      ToastMessage(

        response.status,

        "Message Sent Successfully"
      );

      //* ================= RESET FORM =================

      resetForm();

    } catch (error: any) {

      console.log(error);

      //* ================= ERROR ALERT =================

      AlertMessage(

        "Message Failed",

        "Something went wrong while sending email.",

        "error"
      );

      //* ================= ERROR TOAST =================

      ToastMessage(

        error?.status || 500,

        "Failed To Send Message"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <>

      {/* ================= GLOBAL LOADER ================= */}

      {loading && <Loader />}

      <div className="container">

        {/* ================= TITLE ================= */}

        <div className="row">

          <div className="section-title padd-15">

            <h2>Connect Me</h2>

          </div>

        </div>

        {/* ================= SUB TITLE ================= */}

        <h3 className="connect-title padd-15">

          Have Any Questions?

        </h3>

        <h4 className="connect-sub-title padd-15">

          I'M VERY RESPONSIVE TO MESSAGES

        </h4>

        {/* ================= FORM ================= */}

        <Formik

          initialValues={initialValues}

          validationSchema={ContactSchema}

          onSubmit={handleSubmit}
        >

          {() => (

            <Form className="connect-form padd-15">

              {/* ================= NAME + EMAIL ================= */}

              <div className="row">

                {/* ================= NAME ================= */}

                <div className="form-item col-6 padd-15">

                  <Field
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    className="form-control"
                  />

                  <ErrorMessage
                    name="from_name"
                    component="span"
                    className="form-error"
                  />

                </div>

                {/* ================= EMAIL ================= */}

                <div className="form-item col-6 padd-15">

                  <Field
                    type="email"
                    name="email_id"
                    placeholder="Email"
                    className="form-control"
                  />

                  <ErrorMessage
                    name="email_id"
                    component="span"
                    className="form-error"
                  />

                </div>

              </div>

              {/* ================= SUBJECT ================= */}

              <div className="row">

                <div className="form-item col-12 padd-15">

                  <Field
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="form-control"
                  />

                  <ErrorMessage
                    name="subject"
                    component="span"
                    className="form-error"
                  />

                </div>

              </div>

              {/* ================= MESSAGE ================= */}

              <div className="row">

                <div className="form-item col-12 padd-15">

                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    className="form-control"
                  />

                  <ErrorMessage
                    name="message"
                    component="span"
                    className="form-error"
                  />

                </div>

              </div>

              {/* ================= BUTTON ================= */}

              <div className="row">

                <div className="form-item col-12 padd-15">

                  <button
                    type="submit"
                    className="btn"
                    disabled={loading}
                  >

                    {
                      loading
                        ? "SENDING..."
                        : "SEND MESSAGE"
                    }

                  </button>

                </div>

              </div>

            </Form>

          )}

        </Formik>

      </div>

    </>
  );
};

export default Connect;