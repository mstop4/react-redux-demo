import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FormContainer from './components/container/FormContainer'

import store from './store/index'
import { addArticle } from './actions/index'

window.store = store
window.addArticle = addArticle

class App extends Component {
  constructor() {
    super()
  }

  render() {
    let rows = []
    for (let i = 0; i < 10; i++) {
      rows.push(<FormContainer key={i}/>)
    }
    return (
      <div>
        {rows}
      </div>
    )
  }
}

export default App

const wrapper = document.getElementById('create-article-form')
wrapper ? ReactDOM.render(<App/>, wrapper) : false