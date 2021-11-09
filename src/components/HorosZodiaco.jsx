import BoxHoroscopo from "./BoxHoroscopo"
import calculoZodiaco from "./calculoZodiaco"

const HorosZodiaco = (props) =>{
    const fecha = parseInt(props.fecha)    
    let tuZodiaco = calculoZodiaco(fecha)
    let title = 'Horóscopo zodíaco'
    let explanation = 'Por fecha de nacimiento:'
    return(
        <BoxHoroscopo titulo={title} signo={tuZodiaco} explicacion={explanation}/>
    )
}

export default HorosZodiaco