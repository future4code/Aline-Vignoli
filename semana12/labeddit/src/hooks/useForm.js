import { useState } from 'react';

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (name, value) => {
        setForm({...form, [name]: value})
    }

    return {form, onChange}
}