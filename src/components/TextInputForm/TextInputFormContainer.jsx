import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFromContainer() {

    const [inputType, setInputType] = useState('password');

    function onSubmitHandler(event) {
        event.preventDefault();
        console.log("Submitted the form");
    }

    function TextInputChange(event){
        console.log("Input field changed");
        console.log(event.target.value);
    }

    function onClickHandler(event) {
        if(inputType === 'text') {
            event.target.textContent = 'Show';
            setInputType("password");
        } else if(inputType === 'password') {
            event.target.textContent = 'Hide';
            setInputType("text");
        }
    }
    return (
        <TextInputForm
        onSubmitHandler={onSubmitHandler}
        TextInputChange={TextInputChange}
        onClickHandler={onClickHandler}
        inputType={inputType}
        />
    )
}

export default TextInputFromContainer;