import React from "react"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return { 
    messages: state.messages
  }
}

const ConnectedList = ({ messages }) => (
  <ul className="list-group list-group-flush">
    {messages.map(el =>  (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
)

const List = connect(mapStateToProps)(ConnectedList)

export default List