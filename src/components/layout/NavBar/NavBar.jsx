import React from "react";
import Logo from "../../common/Logo/Logo";
import CustomizedInputBase from "../../common/Buscador/Buscador";
import BotonAgregar from "../../common/BotonAgregar/BotonAgregar";
import Carrito from "../../common/CarritoCompras/Carrito";
import '../NavBar/navbar.css'


const NavBar = ()=>{
    return (
        <div className='container-navBar'>
      <Logo />
      <CustomizedInputBase />
      <BotonAgregar text={"Iniciar sesion"}/>
      <Carrito />
      </div>
    
     )
}
export default NavBar