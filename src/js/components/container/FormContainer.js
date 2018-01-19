import react, { Component } from 'react'
import ReactDOM from 'react-dom'
import Input from '../presentation/Input'

class FormContainer extends Component {
  constructor() {
    super()

    this.state = {
      seo_title: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    const { seo_title } = this.state
    return (
      <form id="article-form">
        <Input
          text="SEO Title"
          label="seo_Title"
          type="text"
          id="seo_Title"
          value={seo_title}
          handleChange={this.handleChange}
        />
      </form>
    )
  }
}

export default FormContainer