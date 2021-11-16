import listadoGitano from './listados/listadoGitano'

const calculoGitano = (fecha) => {
    if (fecha > 120 && fecha < 220) {
        return listadoGitano.Copa
    } else if (fecha > 219 && fecha < 321) {
        return listadoGitano.Capilla
    } else if (fecha > 320 && fecha < 421) {
        return listadoGitano.Punal
    } else if (fecha > 420 && fecha < 521) {
        return listadoGitano.Corona
    } else if (fecha > 520 && fecha < 622) {
        return listadoGitano.Candelabro
    } else if (fecha > 621 && fecha < 723) {
        return listadoGitano.Rueda
    } else if (fecha > 722 && fecha < 823) {
        return listadoGitano.Estrella
    } else if (fecha > 822 && fecha < 923) {
        return listadoGitano.Campana
    } else if (fecha > 922 && fecha < 1023) {
        return listadoGitano.Moneda
    } else if (fecha > 1022 && fecha < 1123) {
        return listadoGitano.Daga
    } else if (fecha > 1122 && fecha < 1222) {
        return listadoGitano.Hacha
    } else if (fecha > 1221 || fecha < 121) {
        return listadoGitano.Herradura
    }
}

export default calculoGitano;