
const calculoMaya = (fecha) => {
    if (fecha > 109 && fecha < 207) {
        return 'Mono'
    } else if (fecha > 206 && fecha < 307) {
        return 'Halcón'
    } else if (fecha > 306 && fecha < 404) {
        return 'Jaguar'
    } else if (fecha > 403 && fecha < 502) {
        return 'Perro - Zorro'
    } else if (fecha > 501 && fecha < 530) {
        return 'Serpiente'
    } else if (fecha > 529 && fecha < 627) {
        return 'Conejo - Ardilla'
    } else if (fecha > 626 && fecha < 726) {
        return 'Tortuga'
    } else if (fecha > 725 && fecha < 823) {
        return 'Murciélago'
    } else if (fecha > 822 && fecha < 920) {
        return 'Escorpión'
    } else if (fecha > 919 && fecha < 1018) {
        return 'Venado'
    } else if (fecha > 1017 && fecha < 1115) {
        return 'Buho'
    } else if (fecha > 1114 && fecha < 1213) {
        return 'Pavo real'
    } else if (fecha > 1212 || fecha < 110) {
        return 'Lagarto'
    }
}

export default calculoMaya;