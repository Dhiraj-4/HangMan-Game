import getMaskedString from "./MaskedTextLogic";

function MaskedText({ text, guessedLetters }) {

    const maskedString = getMaskedString(text, guessedLetters);
    
    return (
        <>
        {maskedString.map((letter, idx) => {
            return (
                <span key={idx} className="mx-1">
                    {letter}
                </span>
            )
        })}
        </>
    )
}

export default MaskedText;