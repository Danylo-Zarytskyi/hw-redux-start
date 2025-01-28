import { useDispatch } from "react-redux";
import { increment } from "../actions/actions";

export default function PlusB() {
    const dispatch = useDispatch();
    
    const handleIncrement = () => {
        dispatch(increment());
    }
    return (
        <button onClick={handleIncrement}>+</button>
    );
}