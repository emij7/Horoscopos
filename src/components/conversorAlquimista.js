import listadoAlquimista from "./listados/listadoAlquimista";

const conversorAlquimista = (numero) => {
    if (numero === 0) {
        return listadoAlquimista.Cobre
    } else if (numero === 1) {
        return listadoAlquimista.Plata
    } else if (numero === 2) {
        return listadoAlquimista.Hierro
    } else if (numero === 3) {
        return listadoAlquimista.Mercurio
    } else if (numero === 4) {
        return listadoAlquimista.Zinc
    } else if (numero === 5) {
        return listadoAlquimista.Estaño
    } else if (numero === 6) {
        return listadoAlquimista.Plomo
    } else if (numero === 7) {
        return listadoAlquimista.Platino
    } else if (numero === 8) {
        return listadoAlquimista.Niquel
    } else if (numero === 9) {
        return listadoAlquimista.Oro
    }

};

export default conversorAlquimista;