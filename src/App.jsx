import axios from 'axios'
import './App.css'
import { useState, useEffect } from 'react'
import Cocktails from './components/Cocktails'
import Coincidence from './Coincidence'

function App() {
  const [dataCocktails, setDataCocktails] = useState ([])
  const [drinks, setDrinks] = useState (" ")
  

  useEffect (() => {
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`)
    .then((resp) =>  setDataCocktails(resp.data.drinks))
     
  } , [drinks])

  const searchDrink= (e) => {
    e.preventDefault()
    setDrinks(e.target[0].value.toLowerCase())
  }
  const toGetBack= () => {
    setDrinks("")
  }
 dataCocktails != null && dataCocktails.sort(( a , b) => a.strDrink.localeCompare(b.strDrink))

  return (
    <div className="App">
      <div>
          <div className='beginning'>
                <h1>@otherLevel.com</h1>
                <img src="/public/cocktails3.jpg" alt="" />
          </div>
          <div className='header'>
              <h2>Welcome to @otherLevel.com
              </h2>
              <h3>The best Cocktails in the word</h3>
              <p>This web page is designed to find your favorite cocktail. Your menu is arranged alphabetically. You can see to which category each cocktail belongs, also details its preparation. Finally, in case your favorite cocktail is not on this page, we will let you know. I invite you to use it.</p>
          </div>
          <form onSubmit={(e)=>searchDrink(e)}>
                <div className='search'>
                  <input 
                  type="search"
                  placeholder='Search for a Drinks'  />
                  <button  type='submit'> 
                      <i class="fa-solid fa-magnifying-glass"></i>
                  </button> 
                </div>
          </form>
      </div>

      <div className='cocktails'>
        {dataCocktails === null ? <Coincidence data1 = {"block"} toGetBack= {toGetBack} />  : dataCocktails.map((cocktails, index) => (
              <Cocktails key={`cocktails nro-${index}`} data={ cocktails } />
          ))}
      </div>

      <footer>
        <h3>
            Thanks for visiting our website, For more information write us.
        </h3>
        <a href="mailto:otherlevel@gmail.com">otherlevel@gmail.com</a>
      </footer>
          
    </div>

  )
}


export default App
