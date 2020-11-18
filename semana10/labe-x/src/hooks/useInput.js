import { useState } from "react";

const useInput = () => {
    const [input, setInput] = useState("");

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    return [input, handleInput];
}

export default useInput
