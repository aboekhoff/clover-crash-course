import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { actionCreators } from './redux'

const TodoList = (props) => (
  <div className="TodoList">
    {props.todos.map((todo, index) => (<Todo index={index} key={index} tag={todo.tag} content={todo.content} />))}
  </div>
)

const mapStateToProps = state => ({
  todos: state
})

const mapDispatchToProps = actionCreators

export default connect(mapStateToProps)(TodoList)
