const reductor = (suma) => {
    let sumaTotal = 0
    for (let i = 0; i < suma.toString().length; i++) {
        sumaTotal = sumaTotal + parseInt(suma.toString()[i])
    }
    if (sumaTotal.toString().length > 1) {
        return reductor(sumaTotal)
    }
    return sumaTotal
}

const calculoAlquimista = (fecha) => {
    let regNum = /\d/g
    let fechaNumero = fecha.match(regNum).join('')
    let sumaTotal = 0
    for (let i = 0; i < fechaNumero.length; i++) {
        sumaTotal = sumaTotal + parseInt(fechaNumero[i])
    }
    if (sumaTotal === 10) {
        return 0
    } else {
        return reductor(sumaTotal)
    }
};

export default calculoAlquimista;