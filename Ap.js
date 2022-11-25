import React , {useEffect, useState}from "react"
import SearchBar from "../SearchBar"


const App = () => {

  const [productsState,setProductsState]= useState([])
  
  const fetchApi=()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProductsState(json))
    }
       
  
    
  useEffect(()=>{
    fetchApi()},[]
  )
  
  
      return (
       <div>
        <SearchBar products={setProductsState} />
     {productsState.map(item=>{ return <li>{item.title}</li>})}
      </div>
      )
     
  
  }
  
  export default App