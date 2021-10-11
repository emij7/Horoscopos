
const calculoHindu = (fecha) => {
    if (fecha > 120 && fecha < 219) {
        return 'Kumbha-Kethu'
    } else if (fecha > 218 && fecha < 321) {
        return 'Meena-Galika'
    } else if (fecha > 320 && fecha < 421) {
        return 'Mesha-Angaraka'
    } else if (fecha > 420 && fecha < 521) {
        return 'Vrishasca-Surkra Vrishabha'
    } else if (fecha > 520 && fecha < 622) {
        return 'Mithuna-Budha'
    } else if (fecha > 621 && fecha < 723) {
        return 'Kataka-Chandra'
    } else if (fecha > 722 && fecha < 823) {
        return 'Simaha-Ravi'
    } else if (fecha > 822 && fecha < 923) {
        return 'Kanta Budha'
    } else if (fecha > 922 && fecha < 1023) {
        return 'Thula Sukra'
    } else if (fecha > 1022 && fecha < 1123) {
        return 'Vrischica-Angaraka'
    } else if (fecha > 1122 && fecha < 1222) {
        return 'Dhanus – Brishaspati'
    } else if (fecha > 1221 || fecha < 121) {
        return 'Makara-Sani'
    }
}

export default calculoHindu;