import { useState } from "react"


const Coincidence = ({data1, toGetBack}) => {
    const [data, setData] =useState(data1)  
    setTimeout(() => {
        setData("none")
        toGetBack()
        
    }, 3000); 
    return (
        <div id='toast' style={{display: data}}>
            <h3>"No matches"</h3>
            <img src="/cocktails2.jpg" alt="" />
        </div>
    )
}
export default Coincidence