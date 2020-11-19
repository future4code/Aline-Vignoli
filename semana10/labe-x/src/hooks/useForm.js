import { useState } from "react";

const useForm = (inicialState) => {
    const [form, setForm] = useState(inicialState);

    const handleForm = (event) => {
        const [ value, name ] = event.target
        setForm({...form, [name]: value})
    };

    return [form, handleForm];
}

export default useForm
