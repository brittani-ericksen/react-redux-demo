import Output from "../containers/OutputContainer";
import Increment from "../containers/IncrementContainer";
import Decrement from "../containers/DecrementContainer";
import IncrementAlt from "../components/IncrementAlt";

const Counter = () => {
    return (
        <>
            <h1>Just Another F$#@ing Counter App</h1>
            <Output />
            <Increment />
            <Decrement />
            <br />
            <IncrementAlt />
        </>
    )
}

export default Counter;