import React, { Component } from 'react'
import Input from '../presentation/Input'

class FormContainer extends Component {
  constructor() {
    super()

    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    const {title} = this.state
    return (
      <form id="article-form">
        <Input
          text="Text Box!"
          label="title"
          type="text"
          id="title"
          value={title}
          handleChange={this.handleChange}
        />
      </form>
    )
  }
}

export default FormContainer