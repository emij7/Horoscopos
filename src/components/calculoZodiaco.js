import listadoZodiaco from "./listados/listadoZodiaco"

const calculoZodiaco = (fecha) => {
    if (fecha > 120 && fecha < 219) {
        return listadoZodiaco.Acuario
    } else if (fecha > 218 && fecha < 321) {
        return listadoZodiaco.Piscis
    } else if (fecha > 320 && fecha < 419) {
        return listadoZodiaco.Aries
    } else if (fecha > 420 && fecha < 521) {
        return listadoZodiaco.Tauro
    } else if (fecha > 520 && fecha < 621) {
        return listadoZodiaco.Geminis
    } else if (fecha > 620 && fecha < 722) {
        return listadoZodiaco.Cancer
    } else if (fecha > 721 && fecha < 823) {
        return listadoZodiaco.Leo
    } else if (fecha > 822 && fecha < 923) {
        return listadoZodiaco.Virgo
    } else if (fecha > 922 && fecha < 1023) {
        return listadoZodiaco.Libra
    } else if (fecha > 1022 && fecha < 1123) {
        return listadoZodiaco.Escorpio
    } else if (fecha > 1122 && fecha < 1222) {
        return listadoZodiaco.Sagitario
    } else if (fecha > 1221 || fecha < 121) {
        return listadoZodiaco.Capricornio
    }
}
export default calculoZodiaco