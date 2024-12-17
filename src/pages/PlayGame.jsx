import { Link, useLocation} from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import KeyboardButtons from "../components/KeyboardButtons/KeyboardButtons";
import { useState } from "react";

function PlayGame() {
    
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));

    // const {text} = useParams();

    const {state} = useLocation();
    const [guessedLetters, setGuessedLetters] = useState(['']);

    const handlGuess = (event) => {
        const btn = event.target;
        if(!guessedLetters.includes(btn.innerText)) {
            setGuessedLetters([...guessedLetters, btn.innerText]);
        }
    }
    return (
        <>
            <h1>Play Game, {state}</h1>
            <MaskedText text={state} guessedLetters={guessedLetters}/>
            <div className="my-5 w-96 text-center">
            <KeyboardButtons onGuess={handlGuess}/>
            </div>
            <Link to='/' className="text-blue-400">StartGame Link</Link>
        </>
    )
}

export default PlayGame;