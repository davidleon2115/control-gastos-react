import NuevoPresupuesto from "./NuevoPresupuesto"


const Header = ({ presupuesto, setPresupuesto }) => {
    return (
        <header>
            <h1>Planificador de Gastosss</h1>
            <NuevoPresupuesto 
                presupuesto = {presupuesto}
                setPresupuesto = {setPresupuesto}
            />
        </header>
    )
}

export default Header