import calculoZodiaco from "./calculoZodiaco"

const HorosZodiaco = (props) =>{
    const fecha = parseInt(props.fecha)    
    let tuZodiaco = calculoZodiaco(fecha)
    return(
        <div className='horos__box'>
            <div className='horos__box--titles'>
                <h1>Horóscopo Zodíaco</h1>
                <h3>{tuZodiaco.nombre}</h3>
            </div>
            <div className="horos__box--info">
                <p>Tipo de signo: {tuZodiaco.descripcion}</p>    
                <img src={tuZodiaco.img} alt="Icono horóscopo zodíaco" />
                <p>{tuZodiaco.fecha}</p>
            </div>
        </div>    
    )
}

export default HorosZodiaco