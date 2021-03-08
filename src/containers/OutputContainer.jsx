import Output from "../components/Output";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    // translate redux state into react props
    return {
        amount: state.count
    }
}

export default connect(mapStateToProps)(Output);