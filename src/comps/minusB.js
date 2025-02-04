import { useDispatch } from "react-redux";
import { decrement } from "../actions/actions";

export default function MinusB() {
    const dispatch = useDispatch();
    
    const handleDecrement = () => {
        dispatch({ type: 'MINUS'});
    }
    return (
        <button onClick={handleDecrement}>-</button>
    );
}