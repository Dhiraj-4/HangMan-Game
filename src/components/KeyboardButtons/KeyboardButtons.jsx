import Button from './../Button/Button';

function KeyboardButtons({ onGuess }) {
    const keys = [];
    for(let i = 1 ; i <= 26; i++) {
        keys.push(i);
    }

    //A => 65

    return (
        <>
            {keys.map((char,idx) => {
                return (
                    <Button key={idx}
                     text={String.fromCharCode(char+64)}
                      onClickHandler={onGuess}
                      />
                )
            })}
        </>
    )
}

export default KeyboardButtons;