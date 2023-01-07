const Cocktails = ({data}) => {
    return (
        <div>
            <img src= {data.strDrinkThumb} alt="" />
            <h2>{data.strDrink}</h2>
            <h3><span>Category:</span>{data.strCategory}</h3>
            <article>{data.strInstructions}</article>
        </div>
    )
}
export default Cocktails