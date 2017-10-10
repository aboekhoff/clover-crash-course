import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

const TodoList = (props) => (
  <div className="TodoList">
    {props.todos.map(todo => (<Todo tag={todo.tag} content={todo.content} />))}
  </div>
)

const mapStateToProps = state => ({
  todos: state
})

export default connect(mapStateToProps)(TodoList)
