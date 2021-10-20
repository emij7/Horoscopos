import listadoChino from "./listadoChino";

const calculoChino = (fecha) => {
    if (fecha % 12 === 0) {
        return listadoChino.Mono
    } else if (fecha % 12 === 1) {
        return listadoChino.Gallo
    } else if (fecha % 12 === 2) {
        return listadoChino.Perro
    } else if (fecha % 12 === 3) {
        return listadoChino.Cerdo
    } else if (fecha % 12 === 4) {
        return listadoChino.Rata
    } else if (fecha % 12 === 5) {
        return listadoChino.Buey
    } else if (fecha % 12 === 6) {
        return listadoChino.Tigre
    } else if (fecha % 12 === 7) {
        return listadoChino.Conejo
    } else if (fecha % 12 === 8) {
        return listadoChino.Dragon
    } else if (fecha % 12 === 9) {
        return listadoChino.Serpiente
    } else if (fecha % 12 === 10) {
        return listadoChino.Caballo
    } else if (fecha % 12 === 11) {
        return listadoChino.Cabra
    }
};

export default calculoChino;