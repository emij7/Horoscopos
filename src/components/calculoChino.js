
const calculoChino = (fecha) => {
    if (fecha % 12 === 0) {
        return 'Mono'
    } else if (fecha % 12 === 1) {
        return 'Gallo'
    } else if (fecha % 12 === 2) {
        return 'Perro'
    } else if (fecha % 12 === 3) {
        return 'Cerdo'
    } else if (fecha % 12 === 4) {
        return 'Rata'
    } else if (fecha % 12 === 5) {
        return 'Buey'
    } else if (fecha % 12 === 6) {
        return 'Tigre'
    } else if (fecha % 12 === 7) {
        return 'Conejo'
    } else if (fecha % 12 === 8) {
        return 'Dragón'
    } else if (fecha % 12 === 9) {
        return 'Serpiente'
    } else if (fecha % 12 === 10) {
        return 'Caballo'
    } else if (fecha % 12 === 11) {
        return 'Cabra'
    }
};

export default calculoChino;