import Increment from "../components/Increment";
import { connect } from "react-redux";
import { actionIncrement } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
    //translate redux dispatch, dispatching an action, to a react prop
    return {
        handleClick: () => {
            dispatch(actionIncrement())
        }
    }
}

export default connect(null, mapDispatchToProps)(Increment);