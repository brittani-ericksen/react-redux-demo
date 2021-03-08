import { connect } from "react-redux";
import { actionIncrement } from "../redux/actions";

const IncrementAlt = (props) => (
    <>
        <button onClick={props.handleClick}>Increment Alt Button</button>
    </>
);

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionIncrement());
        }
    }
}

export default connect(null, mapDispatchToProps)(IncrementAlt);