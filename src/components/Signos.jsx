import React, {useState} from 'react';
import ListadoSignos from './ListadoSignos';


const Input = () =>{
    const [date, setDate] = useState('2000-01-01')
    const [newDate, setNewDate] = useState(undefined)
    const handleChange = (e)=>{
        setDate(e.target.value)
    }
    const handleClickCalc = () => {
        setNewDate(date)
    }
    const handleClickRemove = () => {
        setNewDate(undefined)
    }
    return(
        <div>
            <section className='date-box'>
                <input type="date" id="sign" name="birth" min="1900-01-01" max='2022-01-01'value={date}  onChange={handleChange}/>
                <button className='date-box__button' onClick={()=>handleClickCalc()}>Calcular</button>
                {newDate===undefined?
                    null
                    :<button className='date-box__button--remove' onClick={()=>handleClickRemove()}>Reset </button>                
            }
            </section>
            {newDate === undefined?
                null
                :<ListadoSignos fecha={newDate}/>}
        </div>
    )
}
export default Input
