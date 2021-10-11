import React, {useState} from 'react';
import ListadoSignos from './ListadoSignos';


const Input = () =>{
    const [date, setDate] = useState('2000-01-01')
    const [newDate, setNewDate] = useState(undefined)
    const handleChange = (e)=>{
        setDate(e.target.value)
    }
    const handleClick = () => {
        setNewDate(date)
    }
    return(
        <div>
            <section>
                <input type="date" id="sign" name="birth" min="1910-01-01" max='2022-01-01'value={date}  onChange={handleChange}/>
                <button onClick={()=>handleClick()}>Calcular</button>
            </section>
            {newDate === undefined?
                null
                :<ListadoSignos fecha={newDate}/>}
        </div>
    )
}
export default Input
