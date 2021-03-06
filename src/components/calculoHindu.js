import listadoHindu from "./listados/listadoHindu"

const calculoHindu = (fecha) => {
    if (fecha > 120 && fecha < 220) {
        return listadoHindu.KumbhaKethu
    } else if (fecha > 219 && fecha < 321) {
        return listadoHindu.MeenaGalika
    } else if (fecha > 320 && fecha < 421) {
        return listadoHindu.MeshaAngaraka
    } else if (fecha > 420 && fecha < 521) {
        return listadoHindu.VrishascaSurkraVrishabha
    } else if (fecha > 520 && fecha < 622) {
        return listadoHindu.MithunaBudha
    } else if (fecha > 621 && fecha < 723) {
        return listadoHindu.KatakaChandra
    } else if (fecha > 722 && fecha < 823) {
        return listadoHindu.SimahaRavi
    } else if (fecha > 822 && fecha < 923) {
        return listadoHindu.KantaBudha
    } else if (fecha > 922 && fecha < 1023) {
        return listadoHindu.ThulaSukra
    } else if (fecha > 1022 && fecha < 1123) {
        return listadoHindu.VrischicaAngaraka
    } else if (fecha > 1122 && fecha < 1222) {
        return listadoHindu.DhanusBrishaspati
    } else if (fecha > 1221 || fecha < 121) {
        return listadoHindu.MakaraSani
    }
}

export default calculoHindu;