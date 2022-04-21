import { Actions } from "./App"

export default function OperationButton({ dispatch, operation }){
    return (
        <button className='button'
        onClick={() => 
            dispatch({ type: Actions.operation, payload: { operation } })
        }>
            { operation }
        </button>
    )
}