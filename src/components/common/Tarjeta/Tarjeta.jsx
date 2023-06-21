import '../Tarjeta/tarjeta.css'
import { useState } from 'react'

const Tarjeta = ({precio, dcto, envio, imagen, nombre, cuotas})=>{
   const [producto, setProducto] = useState("")
    
    return (
         <>
        <div className='container-tarjeta'>
        <div onMouseOut={()=>setProducto("")} onMouseOver={()=>setProducto("Samsung galaxy ao4 64gb negro 3 ram")} className='tarjeta-container'>
        <div className='tarjeta-container-imagen'>
        <img className='tarjeta-image' src={imagen}></img>
        </div>
        <div className='tarjeta-container-info'>
          <span className='tarjeta-price'>
          <h2>$ {precio}</h2>
          <h4>{dcto}% OFF</h4>
        </span>
        <h4>{cuotas}</h4>

        <span className='tarjeta-container-info-envio'>
          <h4>{envio}</h4>
        </span>
        <h3>{producto}</h3>  
        </div>
        </div>
        </div>
        </>         
 )
}

export default Tarjeta