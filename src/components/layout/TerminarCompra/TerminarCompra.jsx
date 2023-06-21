import React from "react";
import "../TerminarCompra/terminarCompra.css"
import ContadorUnidades from "../../common/ContadorUnidades/ContadorUnidades";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TermianarCompra = ({imagen, nombreProducto, stock, precioProducto} )=>{
    return (
        <div className="container-terminarCompra">
        <div className="container-tituloImage">
        <span className="span"></span>
        <img className="terminarCompra-image" src={imagen}></img>
        <h1 className="terminarCompra-title">{nombreProducto}</h1>
        </div>

         <div className="container-contador">
         <ContadorUnidades  stock={stock} initial={1}/>
         <h2>${precioProducto}</h2>
         <DeleteForeverIcon className="icon-trash" />
         </div>
        </div>
    )
}
export default TermianarCompra