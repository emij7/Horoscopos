
const calculoGitano = (fecha) => {
    if (fecha > 120 && fecha < 220) {
        return 'Copa'
    } else if (fecha > 210 && fecha < 321) {
        return 'Capilla'
    } else if (fecha > 320 && fecha < 421) {
        return 'Puñal'
    } else if (fecha > 420 && fecha < 521) {
        return 'Corona'
    } else if (fecha > 520 && fecha < 622) {
        return 'Candelabro'
    } else if (fecha > 621 && fecha < 723) {
        return 'Rueda'
    } else if (fecha > 722 && fecha < 823) {
        return 'Estrella'
    } else if (fecha > 822 && fecha < 923) {
        return 'Campana'
    } else if (fecha > 922 && fecha < 1023) {
        return 'Moneda'
    } else if (fecha > 1022 && fecha < 1123) {
        return 'Daga'
    } else if (fecha > 1122 && fecha < 1222) {
        return 'Hacha'
    } else if (fecha > 1221 || fecha < 121) {
        return 'Herradura'
    }
}

export default calculoGitano;