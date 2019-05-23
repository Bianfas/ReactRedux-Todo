import React from 'react';
import TextField from '@material-ui/core/TextField';
import * as actions from "./redux/actions";
import {connect} from "react-redux"
const TodoForm = (props) =>{
    let{value,updateValue,saveTodo} = props; 
    return (
    <form onSubmit = {e =>
        {  
        e.preventDefault();
        saveTodo();
        }}>
        <TextField 
        type="text" 
        variant="outlined" 
        margin="normal" 
        placeholder="add to do" 
        onChange = {e => updateValue(e.target.value)}
        value= {value}/>
    </form>
    );
};

const mapStateToProps = ({todo}) => {
    const {value} = todo;
    return {value};
};

export default connect(mapStateToProps,actions)(TodoForm);