import React, { Component } from 'react'
import Form from './Form'
import List from './List'

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
    <h2>Messages</h2>
      <List/>
    </div>
    <div className="col md-4 offset-md-1">
      <h2>Post something</h2>
      <Form/>
    </div>
  </div>
)

export default App