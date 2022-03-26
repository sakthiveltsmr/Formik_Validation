import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
export default function Formiks() {
  const initialstate = {
    name: "",
    email: "",
    passwprd: "",
  };

  const register = Yup.object({
    name: Yup.string()
      .max(11, "name should be less than 10 character")
      .min(4, "name should be greater than 3 character")
      .required("pls fill the feild"),
    email: Yup.string().email().required("enter valid email"),
    passwprd: Yup.string()
      .min(4, "pwd should be greater then 3")
      .max(11, "pwd should be less then 10 ")
      .required("*"),
  });

  return (
    <div className="container">
      <Formik
        initialValues={initialstate}
        validation={register}
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
