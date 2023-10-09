import {useState} from 'react'

const ControlPresupuesto = ({presupuesto}) => {
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <div className="">
                <p>Grafica</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto:</span> ${presupuesto}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto