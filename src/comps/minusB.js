import { useDispatch } from "react-redux";
import { decrement } from "../actions/actions";

export default function MinusB() {
    const dispatch = useDispatch();
    
    const handleDecrement = () => {
        dispatch(decrement());
    }
    return (
        <button onClick={handleDecrement}>-</button>
    );
}