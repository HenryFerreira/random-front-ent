import React from 'react'
import { connect } from 'react-redux';

const Result = (props) => {
  
  return <div className='container'>
    <br/>
    <h4> Resultado: {props.result &&  props.result} </h4>
  </div>
}

const stateMapToPros = state => {
  return {
    result: state.random.result?.randomList
  }
}

export default connect(stateMapToPros)(Result)