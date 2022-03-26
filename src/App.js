import React, { Component } from 'react'
import Form from '../src/components/Form'
import Result from '../src/components/Result'

class App extends Component {// component stateful
  render() {
    return (
      <div className='container'>
        <h3>Lista Random </h3>
        <p>Sistema Ramdom - Demo</p>

        <Form />
        <Result />

      </div>
    )
  }
}

export default App


