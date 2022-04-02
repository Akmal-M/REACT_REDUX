import {useDispatch, useSelector} from "react-redux";
import {addWordActionCreator, removeWordActionCreator} from "../store/actionCreators/wordActionCreator";
import {fetchWords} from "../AsyncActions/words";

const WordComponent = () => {
    const words = useSelector(state => state.wordReduce.words)
    const dispatch = useDispatch()

    const addWord = (word) => {
        const createdWord = {
            word,
            id:Date.now()
        }
        dispatch(addWordActionCreator(createdWord))
    }

    const removeWord = (word) => {
      dispatch(removeWordActionCreator(word.id))
    }


    return(
        <div>
            <button onClick={ () => dispatch(fetchWords()) }>Get words</button>
            <button onClick={ () => addWord(prompt())}>Add word</button>
            <button onClick={ () => removeWord(prompt())}>Remove word</button>
            { words.map(word =>
                <div key={word.id} onClick={() => removeWord(word)}>
                    {word.name}
                </div>)
            }
        </div>
    )
}

export default WordComponent