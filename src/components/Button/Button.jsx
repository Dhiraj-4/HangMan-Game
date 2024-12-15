import { getButtonStyle } from "./ButtonContainer";

function Button({text, onClickHandler , styleType = 'primary', type = 'button'}) {

    return (
        <button
        className={`${getButtonStyle(styleType)} px-4 py-2 border text-white font-bold`}
        onClick={onClickHandler}
        type={type}
        >
            {text}
        </button>
    )
}

export default  Button;