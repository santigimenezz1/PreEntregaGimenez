import React from 'react'
import './App.css'
import NavBar from './components/layout/NavBar/NavBar'
import Enlaces from './components/common/EnlacesNavBar/Enlaces'
import Carrete from './components/common/CarreteFotos/Carrete'
import ItemListContainer from './components/common/ItemListContainer/ItemListContainer'



function App() {
 return (
   <>
   <NavBar />
   <Enlaces />
   <Carrete />
   <ItemListContainer greeting={"practico coderhouse"}/>
   </>
    )
}
export default App
