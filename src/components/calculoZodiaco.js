
const calculoZodiaco = (fecha) => {
    if (fecha > 120 && fecha < 219) {
        return 'Acuario'
    } else if (fecha > 218 && fecha < 321) {
        return 'Piscis'
    } else if (fecha > 320 && fecha < 421) {
        return 'Aries'
    } else if (fecha > 420 && fecha < 521) {
        return 'Tauro'
    } else if (fecha > 520 && fecha < 622) {
        return 'Geminis'
    } else if (fecha > 621 && fecha < 723) {
        return 'Cancer'
    } else if (fecha > 722 && fecha < 823) {
        return 'Leo'
    } else if (fecha > 822 && fecha < 923) {
        return 'Virgo'
    } else if (fecha > 922 && fecha < 1023) {
        return 'Libra'
    } else if (fecha > 1022 && fecha < 1123) {
        return 'Escorpio'
    } else if (fecha > 1122 && fecha < 1222) {
        return 'Sagitario'
    } else if (fecha > 1221 || fecha < 121) {
        return 'Capricornio'
    }
}
export default calculoZodiaco