import { expression } from "@babel/template";
import { UPDATE_VALUE, SAVE_TODO } from "../actions/actionTypes";

const INITIAL_STATE ={
    value:"",
    todo:[]
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UPDATE_VALUE:
            return {
                ...state,
                value: action.payload
            };
        case SAVE_TODO:
            const todos = state.todo;
            todos.push({
                value:state.value,
               completed : false
            });
            console.log(todos);
            return {
                ...state,
                todo:todos,
                value:""
            }
            //this.clearValue();            
        // saveTodo = () =>{
//     const todos = this.state.todos;
//     //todos.push(this.state.value);
//     todos.push({
//       value:this.state.value,
//       completed : false
//     });
//     this.clearValue();
//     this.setState({
//       todos
//       //value:""
//     });
//   };
    
        
        
      

        default:
                return state;
    }

}
