import React from 'react'
import Giphy from './Giphy'
import './Todo.css'

const Todo = (props) => (
  <div className="Todo">
    <div className="text">
      <button type="button">Delete</button>
      <div className="tag">{props.tag}</div>
      <div className="content">{props.content}</div>
    </div>
    <div className="image">
      <Giphy tag={props.tag} />
    </div>
  </div>
)

export default Todo
