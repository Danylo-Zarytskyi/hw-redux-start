import { useDispatch } from "react-redux";
import { increment } from "../actions/actions";

export default function PlusB() {
    const dispatch = useDispatch();
    
    const handleIncrement = () => {
        dispatch({ type: 'PLUS'});
    }
    return (
        <button onClick={handleIncrement}>+</button>
    );
}