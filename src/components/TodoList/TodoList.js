import React from "react"

// Form
import { Formik } from "formik"

// Styles
import "./styles.css"
import "../../utils/font-awesome"

// Components
import TodoTitle from "./TodoTitle/TodoTitle"
import TodoInput from "./TodoInput/TodoInput"
import TodoItem from "./TodoItem/TodoItem"

// Component
const TodoList = () => {
  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
      <TodoTitle title="My Todo's" />
      <TodoInput />
      <div className="p-2 m-4 border-black-25 border-bottom"></div>
      {/* Todo List Section */}
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          <TodoItem />
        </div>
      </div>
    </div>
  )
}

export default TodoList

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
