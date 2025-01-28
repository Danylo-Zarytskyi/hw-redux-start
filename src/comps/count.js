import { useSelector } from "react-redux";

export default function Count() {
    const count = useSelector(state => state.number.count);
    return (
        <h1>Count: {count}</h1>
    );
}