import React, { useEffect } from "react"
import { Formik } from "formik"

// Home
export default function Home() {
  return (
    <div>
      <h1>Add a message</h1>
      <Formik
        initialValues={{ message: "" }}
        validate={values => {
          const errors = {}
          if (!values.message) {
            errors.message = "Required"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values", values)
          // Post Data
          fetch(`/.netlify/functions/add_message`, {
            method: "POST",
            body: JSON.stringify(values),
          })
            .then(res => res.json())
            .then(result => {
              console.log("success", result)
            })
            .catch(err => {
              console.log(err)
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message && errors.message}
            <button type="submit" disabled={isSubmitting}>
              Add Message
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
