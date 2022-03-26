import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandom } from '../actions/Actions';


const Form = (props) => {// component stateless
    const [state, setState] = useState();
    const onSubmit = (e) => {
        e.preventDefault();
        props.dispatch(fetchRandom(state));
    };

    return <div className='container-sm'>
        <form className="formNumber" onSubmit={onSubmit}>
            <div>
                <label htmlFor="number1">Primer Número: </label>
                <input id="number1" type="text" min="0" max="100"
                    onChange={(e) => setState({ ...state, number1: e.target.value })}>
                </input>
                {" "}
                <label htmlFor="number2">Segundo Número: </label>
                <input id="number2" type="text" min="0" max="100"
                    onChange={(e) => setState({ ...state, number2: e.target.value })}>
                </input>
            </div>
            <br/>
            <button className="btn btn-primary" type="submit" disabled={props.loading}>
                Guardar
            </button>
        </form>
    </div>
}

const stateMapToPros = state => {
    return {
        loading: state.view.loading
    }
}

export default connect(stateMapToPros)(Form) 