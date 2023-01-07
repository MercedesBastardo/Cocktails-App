import axios from 'axios'
import './App.css'
import { useState, useEffect } from 'react'
import Cocktails from './components/Cocktails'

function App() {
  const [dataCocktails, setDataCocktails] = useState ([])

  useEffect (() => {
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
    .then((resp) => { setDataCocktails(resp.data.drinks)})
    .catch((error) => {console.error(error)})
    
  } , [dataCocktails])

  return (
    <div className="App">
      <div>
        <div className='beginning'>
            <i class="fa-solid fa-martini-glass-citrus"></i>
            <h1>The best Cocktails in the word</h1>
        </div>
        <form onSubmit={(e)=>searchDrink(e)}>
        <input 
        type="text"
        placeholder='Search for a Drinks'  />
        <button  type='text'> 
            <img src=  "./assets" alt="" /> 
        </button> 
        </form>
      </div>
      {dataCocktails.map((cocktails, index) => (
          <Cocktails key={`cocktails nro-${index}`} data={ cocktails } />
      ))}
    </div>

  )
}

export default App
