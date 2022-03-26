import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import "./Formik.css";
export default function Formiks() {
  const initialstate = {
    name: "",
    email: "",
    passwprd: "",
  };

  const signUp = Yup.object({
    name: Yup.string()
      .min(4, "first name should be greather 3")
      .max(8, "firstName should be less than 9")
      .required("should not be empty"),

    email: Yup.string().email("should be valid email").required("required *"),

    password: Yup.string()
      .min(4, "should be greater than 3")
      .max(6, "should be less than 7")
      .required("*"),
  });

  return (
    <div className="container">
      <Formik
        initialValues={initialstate}
        validationSchema={signUp}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => {
          return (
            <div className="form-container">
              <h1>Register</h1>
              <Form>
                <label>Name</label>
                <Field type="text" className="name" name="name" />
                <ErrorMessage name="name" />
                <br />
                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" />
                <br />
                <label>Password</label>
                <Field type="text" name="password" />
                <ErrorMessage name="password" />
                <br />
                <button type="submit">signup</button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
