import React from "react"

const TodoInput = () => {
  return (
    <div className="row m-1 p-3">
      <div className="col col-11 mx-auto">
        <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
          <div className="col">
            <input
              type="text"
              className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
              placeholder="Add new .."
            />
          </div>
          <div className="col-auto px-0 mx-0 mr-2">
            <button type="button" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoInput
