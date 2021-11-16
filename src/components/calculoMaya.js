import listadoMaya from "./listados/listadoMaya"

const calculoMaya = (fecha) => {
    if (fecha > 109 && fecha < 207) {
        return listadoMaya.Mono
    } else if (fecha > 206 && fecha < 307) {
        return listadoMaya.Halcon
    } else if (fecha > 306 && fecha < 404) {
        return listadoMaya.Jaguar
    } else if (fecha > 403 && fecha < 502) {
        return listadoMaya.Zorro
    } else if (fecha > 501 && fecha < 530) {
        return listadoMaya.Serpiente
    } else if (fecha > 529 && fecha < 627) {
        return listadoMaya.Ardilla
    } else if (fecha > 626 && fecha < 726) {
        return listadoMaya.Tortuga
    } else if (fecha > 725 && fecha < 823) {
        return listadoMaya.Murcielago
    } else if (fecha > 822 && fecha < 920) {
        return listadoMaya.Escorpion
    } else if (fecha > 919 && fecha < 1018) {
        return listadoMaya.Venado
    } else if (fecha > 1017 && fecha < 1115) {
        return listadoMaya.Buho
    } else if (fecha > 1114 && fecha < 1213) {
        return listadoMaya.Pavo
    } else if (fecha > 1212 || fecha < 110) {
        return listadoMaya.Lagarto
    }
}

export default calculoMaya;