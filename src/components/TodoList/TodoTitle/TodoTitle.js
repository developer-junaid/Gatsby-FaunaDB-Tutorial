import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TodoTitle = ({ title }) => {
  return (
    <div className="row m-1 p-4">
      <div className="col">
        <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
          <FontAwesomeIcon
            className="bg-primary text-white rounded p-2"
            icon={"check"}
          />
          <span>&nbsp;{title}</span>
        </div>
      </div>
    </div>
  )
}

export default TodoTitle
