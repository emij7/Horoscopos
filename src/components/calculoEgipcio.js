import listadoEgipcio from "./listados/listadoEgipcio"

const calculoEgipcio = (fecha) => {
    if (fecha > 115 && fecha < 216) {
        return listadoEgipcio.Bastet
    } else if (fecha > 215 && fecha < 316) {
        return listadoEgipcio.Serket
    } else if (fecha > 315 && fecha < 416) {
        return listadoEgipcio.Apep
    } else if (fecha > 415 && fecha < 516) {
        return listadoEgipcio.Ptah
    } else if (fecha > 515 && fecha < 616) {
        return listadoEgipcio.Atum
    } else if (fecha > 615 && fecha < 716) {
        return listadoEgipcio.Isis
    } else if (fecha > 715 && fecha < 816) {
        return listadoEgipcio.Ra
    } else if (fecha > 815 && fecha < 916) {
        return listadoEgipcio.Horus
    } else if (fecha > 915 && fecha < 1016) {
        return listadoEgipcio.Maat
    } else if (fecha > 1015 && fecha < 1116) {
        return listadoEgipcio.Osiris
    } else if (fecha > 1115 && fecha < 1216) {
        return listadoEgipcio.Hator
    } else if (fecha > 1215 || fecha < 116) {
        return listadoEgipcio.Anubis
    }
}

export default calculoEgipcio;