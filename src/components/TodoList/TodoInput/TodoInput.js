import React from "react"

// Form
import { Formik } from "formik"

// Component
const TodoInput = () => {
  return (
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
            setSubmitting(false)
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
          <div className="row m-1 p-3">
            <div className="col col-11 mx-auto">
              <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div className="col">
                  <input
                    type="text"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                    placeholder="Add new .."
                  />
                  {errors.message && touched.message && errors.message}
                </div>
                <div className="col-auto px-0 mx-0 mr-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                  >
                    {isSubmitting ? "Adding.." : "Add"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default TodoInput

{
  /* <div className="container">
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
</div> */
}
