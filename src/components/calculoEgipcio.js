
const calculoEgipcio = (fecha) => {
    if (fecha > 115 && fecha < 216) {
        return 'Bastet'
    } else if (fecha > 215 && fecha < 316) {
        return 'Serket'
    } else if (fecha > 315 && fecha < 416) {
        return 'Apep'
    } else if (fecha > 415 && fecha < 516) {
        return 'Ptah'
    } else if (fecha > 515 && fecha < 616) {
        return 'Atum'
    } else if (fecha > 615 && fecha < 716) {
        return 'Isis'
    } else if (fecha > 715 && fecha < 816) {
        return 'Ra'
    } else if (fecha > 815 && fecha < 916) {
        return 'Horus'
    } else if (fecha > 915 && fecha < 1016) {
        return 'Maat'
    } else if (fecha > 1015 && fecha < 1116) {
        return 'Osiris'
    } else if (fecha > 1115 && fecha < 1216) {
        return 'Hator'
    } else if (fecha > 1215 || fecha < 116) {
        return 'Anubis'
    }
}

export default calculoEgipcio;