export default function inputValidation(inputValue: string | undefined, secondInputValue: string | undefined): {isValid: boolean, msg: string} {
    if (inputValue != secondInputValue) return {isValid: false, msg: "passwords do not match!"};

    return {isValid: true, msg: ""}
}
