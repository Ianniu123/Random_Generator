import { useState } from 'react'
import GenerateButton from './button'
import services from '../services/foods'

const Search = () => {
    const [numFoods, setNumFoods] = useState("")

    const handleNumChange = ({ target }) => {
        setNumFoods(target.value)
    }

    const handleClick = () => {
        try {
            const num = parseInt(numFoods)
            if (num >= 1 && num <= 10) {
                const result = services.getFood(numFoods)
                console.log(result)
            } else {

            }
        } catch (exception) {

        }
    }

    return (
        <>
            <div className="justify-items-center search-box">
                <button onClick={handleClick} className="btn-search"><i className="fas fa-search"></i></button>
                <input id="numFoods" type="text" className="input-search" placeholder="number of recipes to generate..." value={numFoods} onChange={handleNumChange} />
            </div>
        </>
    )
}

export default Search