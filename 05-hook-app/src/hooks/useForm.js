import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    const handelSubmit = (e) => {
        e.preventDefault();
    }

    return [values, handleInputChange, handelSubmit];

}
