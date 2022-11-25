import React, { useState } from "react"
import "./components/SearchBar.css"




const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")
    const handleClick = () => {
        setSearchValue("")

    }
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)

    }


    const disbtn = searchValue.length > 2

   const filter =props.products.filter((product)=>{
    return product.includes(searchValue)
   })

    return <div>
        <input type="text" value={searchValue} placeholder="search.." onChange={handleInputChange}

        />
      
        {disbtn && <button onClick={handleClick}>search</button>}

     <ul>

     {filter.map((product)=>{
        return <li key={product}>{product}</li>
     })}   
     </ul>
    </div>
}


export default SearchBar
