import { Actions } from "./App"

export default function DigitButton({ dispatch, digit}){
    return (
        <button className='button'
        onClick={() => dispatch({ type: Actions.add_digit, payload: { digit }})}>
            {digit}
        </button>
    )
}


