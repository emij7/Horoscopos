import HorosAlquimista from "./HorosAlquimista"
import HorosArabe from "./HorosArabe"
import HorosCelta from "./HorosCelta"
import HorosChino from "./HorosChino"
import HorosEgipcio from "./HorosEgipcio"
import HorosMaya from "./HorosMaya"
import HorosZodiaco from "./HorosZodiaco"

const ListadoSignos = (props) =>{
    let regNum = /\d/g 
    let fechaDiaMes = props.fecha.toString().slice(5)
    let fechaAnio = parseInt(props.fecha.toString().slice(0,4))
    fechaDiaMes = Number(fechaDiaMes.match(regNum).join(''))
    return(
        <div>
            <p>Signos</p>
            <HorosZodiaco fecha={fechaDiaMes}/>
            <HorosChino fecha={fechaAnio}/>
            <HorosAlquimista fecha = {props.fecha}/>
            <HorosArabe fecha = {fechaDiaMes}/>
            <HorosMaya fecha = {fechaDiaMes}/>
            <HorosCelta fecha = {fechaDiaMes}/>
            <HorosEgipcio fecha = {fechaDiaMes}/>
        </div>
    )
}
export default ListadoSignos