import {useState} from 'react'
import "./ItemCount.css"

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if(contador < stock) {
            setContador (contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
    <>
        <div>
            <button className="botonito" onClick={decrementar}> - </button>
            <p> {contador} </p>
            <button className="botonito" onClick={incrementar}> + </button>
        </div>
        <button className="botonito" onClick={() => funcionAgregar(contador)}> Agregar al carrito </button>
    </>
  )
}

export default ItemCount