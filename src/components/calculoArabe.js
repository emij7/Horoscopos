
const calculoArabe = (fecha) => {
    if (fecha > 120 && fecha < 220) {
        return 'Arma larga -> Honda'
    } else if (fecha > 219 && fecha < 321) {
        return 'Arma mediana -> Hacha'
    } else if (fecha > 320 && fecha < 421) {
        return 'Arma corta -> Puñal'
    } else if (fecha > 420 && fecha < 521) {
        return 'Arma mediana -> Clava'
    } else if (fecha > 520 && fecha < 622) {
        return 'Arma mediana -> Maza'
    } else if (fecha > 621 && fecha < 724) {
        return 'Arma corta -> Cuchillo'
    } else if (fecha > 723 && fecha < 824) {
        return 'Arma larga -> Alfanje'
    } else if (fecha > 823 && fecha < 924) {
        return 'Arma corta -> Machete'
    } else if (fecha > 923 && fecha < 1023) {
        return 'Arma mediana -> Cadena'
    } else if (fecha > 1022 && fecha < 1123) {
        return 'Arma corta -> Gumia'
    } else if (fecha > 1122 && fecha < 1222) {
        return 'Arma larga -> Arco'
    } else if (fecha > 1221 || fecha < 121) {
        return 'Arma larga -> Lanza'
    }
}

export default calculoArabe;