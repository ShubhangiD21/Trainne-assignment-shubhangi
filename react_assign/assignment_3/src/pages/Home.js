import React, { Component } from "react";
import "../style/Home.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Registration Form</h1>
        <div className="RegForm">
          <RegForm />
        </div>
      </div>
    );
  }
}

const RegForm = () => {
  const phnregex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
  const Formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      state: "",
      city: "",
      pincode: "",
    },

    onSubmit: (values) => {
      alert(
        " First Name is :: " +
          values.firstName +
          "\n Last Name is  :: " +
          values.lastName +
          "\n Email ID is  :: " +
          values.email +
          "\n Contact No. is :: " +
          values.contact +
          "\n State is :: " +
          values.state +
          "\n City is :: " +
          values.city +
          "\n PinCode is :: " +
          values.pincode +
          " \n !!!!  Your Information Submitted Successfully !!!"
      );
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First name is req")
        .min(4, "min 4 char is req")
        .max(12, "mix 12 char is req"),
      lastName: Yup.string()
        .required("last name is req")
        .min(4, "min 4 char is req")
        .max(12, "mix 12 char is req"),
      email: Yup.string()
        .required("email is req")
        .email("Plz enter valid email id"),
      contact: Yup.string()
        .required("Contact number is req")
        .min(10, "min 10 no. is req")
        .max(10, "max 10 no. is req")
        .matches(phnregex, "this is not valid number"),
      state: Yup.string().required("State is req"),
      city: Yup.string().required("City is req"),
      pincode: Yup.string().required("Pin Code is Req"),
    }),
  });
  return (
    <form onSubmit={Formik.handleSubmit}>
      <div className="inputField">
        <div className="lbel">
          <lable htmlFor="firstName">First Name : </lable>
        </div>
        <div className="inp">
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={Formik.values.firstName}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
        </div>
      </div>
      {Formik.errors.firstName && Formik.touched.firstName ? (
        <div className="error">
          <p>{Formik.errors.firstName}</p>
        </div>
      ) : null}

      <div className="inputField">
        <div className="lbel">
          <lable htmlFor="lastName">last Name : </lable>
        </div>
        <div className="inp">
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={Formik.values.lastName}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
        </div>
      </div>
      {Formik.errors.lastName && Formik.touched.lastName ? (
        <div className="error">
          <p>{Formik.errors.lastName}</p>
        </div>
      ) : null}

      <div className="inputField">
        <div className="lbel">
          <lable htmlFor="email">Email : </lable>
        </div>
        <div className="inp">
          <input
            type="email"
            name="email"
            id="email"
            value={Formik.values.email}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
        </div>
      </div>
      {Formik.errors.email && Formik.touched.email ? (
        <div className="error">
          <p>{Formik.errors.email}</p>
        </div>
      ) : null}

      <div className="inputField">
        <div className="lbel">
          <lable htmlFor="contact"> Contact : </lable>
        </div>
        <div className="inp">
          <input
            type="text"
            name="contact"
            id="contact"
            value={Formik.values.contact}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
        </div>
      </div>
      {Formik.errors.contact && Formik.touched.contact ? (
        <div className="error">
          <p>{Formik.errors.contact}</p>
        </div>
      ) : null}

      <div className="inputField">
        <div className="lbel">
          <lable htmlFor="state">State : </lable>
        </div>
        <div className="inp">
          <input
            type="text"
            name="state"
            id="state"
            value={Formik.values.state}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
        </div>
      </div>
      {Formik.errors.state && Formik.touched.state ? (
        <div className="error">
          <p>{Formik.errors.state}</p>
        </div>
      ) : null}

      <div className="inputField">
        <div className="lbel">
          <lable htmlFor="city">City : </lable>
        </div>
        <div className="inp">
          <input
            type="text"
            name="city"
            id="city"
            value={Formik.values.city}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
        </div>
      </div>
      {Formik.errors.city && Formik.touched.city ? (
        <div className="error">
          <p>{Formik.errors.city}</p>
        </div>
      ) : null}

      <div className="inputField">
        <div className="lbel">
          <lable htmlFor="pincode">Pincode : </lable>
        </div>
        <div className="inp">
          <input
            type="text"
            name="pincode"
            id="pincode"
            value={Formik.values.pincode}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
        </div>
      </div>
      {Formik.errors.pincode && Formik.touched.pincode ? (
        <div className="error">
          <p>{Formik.errors.pincode}</p>
        </div>
      ) : null}
      <div className="sub">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
