import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import "./Formik.css";
export default function Formiks() {
  const initialstate = {
    name: "",
    email: "",
    password: "",
  };

  const signUp = Yup.object({
    name: Yup.string()
      .min(4, " name should be greather 3")
      .max(11, "Name should be less than 10")
      .required("should not be empty"),

    email: Yup.string().email("should be valid email").required("required *"),

    password: Yup.string().min(4, "should be greater than 3").required("*"),
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
                <div className="feild">
                  <label>Name </label>
                  <Field type="text" name="name" />
                  {/* <br /> */}
                  <ErrorMessage name="name" />
                  <br />
                </div>
                <div className="feild">
                  <label>Email </label>
                  <Field type="email" name="email" />
                  {/* <br /> */}
                  <ErrorMessage name="email" />
                  <br />
                </div>
                <div className="feild">
                  <label>Password </label>
                  <Field type="text" name="password" />
                  {/* <br /> */}
                  <ErrorMessage name="password" />
                  <br />
                </div>

                <button className="btn" type="submit">
                  signup
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
