import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFromContainer() {

    const [inputType, setInputType] = useState('password');
    const [value, setValue] = useState('');

    const Navigate = useNavigate();

    function onSubmitHandler(event) {
        event.preventDefault();
        console.log("Submitted the form,",value);
        if(value) {
            // Query Params
            // Navigate(`/play?text=${value}`); this method is called query params, you recieve it using 
            // const [variable] = useSearchParams();=> this gives you an object containing key value pairs
            // of query params passed in url , and then you can use variable.get('key'); to get value of the key.

            // Path Params
            // Navigate(`/play/${value}`); you can recieve it using const {key} = useParams();

            Navigate('/play', {state: value}); // This method is given to us by
            //  react-router-dom, you can recieve it using const {state} = useLocation();
            // , then you can use the state.wordSelected
        } else {
            alert('Please Enter a word or a phrase');
        }

    }

    function TextInputChange(event){
        console.log("Input field changed");
        console.log(event.target.value);
        setValue(event.target.value);
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