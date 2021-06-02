import React from "react"

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
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  )
}

export default TodoList
