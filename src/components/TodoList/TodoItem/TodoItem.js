import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TodoItem = () => {
  return (
    <div className="col px-1 m-1 d-flex align-items-center">
      <input
        className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
        type="text"
        readOnly
        value="Buy groceries for next week"
        title="Buy groceries for next week"
      />
      <h5 className="m-0 p-0 px-2">
        <FontAwesomeIcon
          icon="pencil-alt"
          className="text-info btn m-0 p-0"
          title="edit todo"
        />
      </h5>
      <h5 className="m-0 p-0 px-2">
        <FontAwesomeIcon
          icon="trash"
          className="text-danger btn m-0 p-0"
          title="edit todo"
        />
      </h5>
    </div>
  )
}

export default TodoItem
