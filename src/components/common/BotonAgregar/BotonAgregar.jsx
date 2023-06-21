import '../BotonAgregar/botonAgregar.css'
const BotonAgregar = ({text, callback})=>{
    return (
        <button  onClick={callback} className= {text === "Comprar ahora" ?'container-button' : 'container-button sumarCarrito' }>
          {text}
        </button>
    )
}
export default BotonAgregar