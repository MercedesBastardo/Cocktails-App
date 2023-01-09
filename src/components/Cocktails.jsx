const Cocktails = ({data}) => {
    return (
        <div className="cocktail">
            <img src= {data.strDrinkThumb} alt="" />
            <h2>{data.strDrink}</h2>
            <h3><span>Category:</span>{data.strCategory}</h3>
            <article>{data.strInstructions}</article>
        </div>
    )
}
export default Cocktails