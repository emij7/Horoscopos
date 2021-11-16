import listadoCelta from "./listados/listadoCelta"

const calculoCelta = (fecha) => {
    
    if (fecha === 624) {
        return listadoCelta.Abedul
    } else if ((fecha > 101 && fecha < 112) || (fecha > 704 && fecha < 715)) {
        return listadoCelta.Abeto
    } else if ((fecha > 203 && fecha < 209) || (fecha > 500 && fecha < 515) || (fecha > 804 && fecha < 814)) {
        return listadoCelta.Alamo
    } else if ((fecha > 410 && fecha < 421) || (fecha > 1013 && fecha < 1024)) {
        return listadoCelta.Arce
    } else if ((fecha > 321 && fecha < 332) || (fecha > 923 && fecha < 1004)) {
        return listadoCelta.Avellano
    } else if ((fecha > 603 && fecha < 614) || (fecha > 1201 && fecha < 1212)) {
        return listadoCelta.Carpe
    } else if ((fecha > 514 && fecha < 525) || (fecha > 1111 && fecha < 1122)) {
        return listadoCelta.Castano
    } else if ((fecha > 208 && fecha < 219) || (fecha > 813 && fecha < 824)) {
        return listadoCelta.Cedro
    } else if ((fecha > 124 && fecha < 204) || (fecha > 725 && fecha < 805)) {
        return listadoCelta.Cipres
    } else if ((fecha > 524 && fecha < 604) || (fecha > 1121 && fecha < 1202)) {
        return listadoCelta.Fresno
    } else if (fecha === 1222) {
        return listadoCelta.Haya
    } else if ((fecha > 613 && fecha < 624) || (fecha > 1211 && fecha < 1222)) {
        return listadoCelta.Higuera
    } else if ((fecha > 624 && fecha < 705) || (fecha > 1222 || fecha < 102)) {
        return listadoCelta.Manzano
    } else if ((fecha > 420 && fecha < 431) || (fecha > 1023 && fecha < 1112)) {
        return listadoCelta.Nogal
    } else if (fecha === 923) {
        return listadoCelta.Olivo
    } else if ((fecha > 111 && fecha < 125) || (fecha > 714 && fecha < 726)) {
        return listadoCelta.Olmo
    } else if ((fecha > 219 && fecha < 230) || (fecha > 823 && fecha < 903)) {
        return listadoCelta.Pino
    } else if (fecha === 321) {
        return listadoCelta.Roble
    } else if ((fecha > 300 && fecha < 311) || (fecha > 901 && fecha < 913)) {
        return listadoCelta.Sauce
    } else if ((fecha > 401 && fecha < 411) || (fecha > 1003 && fecha < 1014)) {
        return listadoCelta.Serbal
    } else if ((fecha > 310 && fecha < 321) || (fecha > 912 && fecha < 923)) {
        return listadoCelta.Tilo
    }
}

export default calculoCelta;
