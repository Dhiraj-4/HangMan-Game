
function getMaskedString(originalWord = '', guessedLetters = '') {

    if (typeof originalWord !== "string") {
        throw new Error("originalWord must be a string");
    }
    if (!Array.isArray(guessedLetters)) {
        throw new Error("guessedLetters must be an array");
    }

    // Filter and normalize guessed letters
    const validGuessedLetters = guessedLetters
        .filter(letter => typeof letter === "string") // Ensure all are strings
        .map(letter => letter.toUpperCase());

   const guessedLetterSet = new Set(validGuessedLetters);

   const result = originalWord.toUpperCase().split('').map(char =>{
        if(guessedLetterSet.has(char)){
            return char;
        } else {
            return "_";
        }
    });

    return result;
}

export default getMaskedString;
