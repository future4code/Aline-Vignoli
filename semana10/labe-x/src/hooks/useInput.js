import { useState } from "react";

const useInput = (inicialState) => {
    const [input, setInput] = useState(inicialState);

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    return [input, handleInput];
}

export default useInput
