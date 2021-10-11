import calculoZodiaco from "./calculoZodiaco"

const HorosZodiaco = (props) =>{
    const fecha = parseInt(props.fecha)    
    let tuZodiaco = calculoZodiaco(fecha)
    return(
        <h3>Horóscopo Zodíaco {tuZodiaco}</h3>        
    )
}

export default HorosZodiaco