import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({onSubmitHandler, TextInputChange, onClickHandler, inputType}) {


    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <TextInput
                label={"Enter a word or a phrase"}
                placeholder="Enter a word or a phrase here..."
                onChangeHandler={TextInputChange}
                type={inputType}
                />
            </div>

            <div>
                <Button
                styleType="warning"
                text={"Show"}
                onClickHandler={onClickHandler}
                />
            </div>

            <div>
                <Button
                styleType="primary"
                text='Submit'
                type="submit"
                />
            </div>
        </form>
    )
}

export default TextInputForm;