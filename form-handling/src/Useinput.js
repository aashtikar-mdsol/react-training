import { useState } from "react";

export function useInput(defaultValue, validationFunction) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [isEdited, setIsEdited] = useState(false);
    const valueIsValid = validationFunction(enteredValue);

    function handleInputBlur() {
        setIsEdited(true);
    }

    function handleInputChange(value) {
        setEnteredValue(value);
        setIsEdited(true);
    }

    return {
        enteredValue,
        isEdited,
        handleInputBlur,
        handleInputChange,
        hasError: isEdited && (!valueIsValid)
    }
}