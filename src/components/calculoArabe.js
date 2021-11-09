import listadoArabe from "./listados/listadoArabe"

const calculoArabe = (fecha) => {
    if (fecha > 120 && fecha < 220) {
        return listadoArabe.Honda
    } else if (fecha > 219 && fecha < 321) {
        return listadoArabe.Hacha
    } else if (fecha > 320 && fecha < 421) {
        return listadoArabe.Punal
    } else if (fecha > 420 && fecha < 521) {
        return listadoArabe.Clava
    } else if (fecha > 520 && fecha < 622) {
        return listadoArabe.Maza
    } else if (fecha > 621 && fecha < 724) {
        return listadoArabe.Cuchillo
    } else if (fecha > 723 && fecha < 824) {
        return listadoArabe.Alfanje
    } else if (fecha > 823 && fecha < 924) {
        return listadoArabe.Machete
    } else if (fecha > 923 && fecha < 1023) {
        return listadoArabe.Cadena
    } else if (fecha > 1022 && fecha < 1123) {
        return listadoArabe.Gumia
    } else if (fecha > 1122 && fecha < 1222) {
        return listadoArabe.Arco
    } else if (fecha > 1221 || fecha < 121) {
        return listadoArabe.Lanza
    }
}

export default calculoArabe;