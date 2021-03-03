import React  from "react";
import { connect } from "react-redux"

function Counter (props) {
    return (
      <div>
        <button onClick={()=>{props.increment}}>-</button>
        <p>{props.count}</p>
        <button onClick={()=>{props.decrement}}>+</button>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "ADD", payload: 1 }),
        decrement: () => dispatch({ type: "REMOVE", payload: 1})
    }
  };
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
