import honda from '../../images/arabe/honda.png'
import hacha from '../../images/arabe/hacha.png'
import punal from '../../images/arabe/punal.png'
import clava from '../../images/arabe/clava.png'
import maza from '../../images/arabe/maza.png'
import cuchillo from '../../images/arabe/cuchillo.png'
import alfanje from '../../images/arabe/alfanje.png'
import machete from '../../images/arabe/machete.png'
import cadena from '../../images/arabe/cadena.png'
import gumia from '../../images/arabe/gumia.png'
import arco from '../../images/arabe/arco.png'
import lanza from '../../images/arabe/lanza.png'
const larga = 'Arma larga'
const mediana = 'Arma mediana'
const corta = 'Arma corta'


const listadoArabe = {
    Honda: {
        nombre: 'Honda',
        descripcion: `${larga}`,
        fecha: '21 de enero a 19 de febrero',
        img: honda
    },
    Hacha: {
        nombre: 'Hacha',
        descripcion: `${mediana}`,
        fecha: '20 de febrero a 20 de marzo',
        img: hacha
    },
    Punal: {
        nombre: 'Puñal',
        descripcion: `${corta}`,
        fecha: '21 de marzo a 20 de abril',
        img: punal
    },
    Clava: {
        nombre: 'Clava',
        descripcion: `${mediana}`,
        fecha: '21 de abril a 20 de mayo',
        img: clava
    },
    Maza: {
        nombre: 'Maza',
        descripcion: `${mediana}`,
        fecha: '21 de mayo a 21 de junio',
        img: maza
    },
    Cuchillo: {
        nombre: 'Cuchillo',
        descripcion: `${corta}`,
        fecha: '22 de junio a 23 de julio',
        img: cuchillo
    },
    Alfanje: {
        nombre: 'Alfanje',
        descripcion: `${larga}`,
        fecha: '24 de julio al 23 de agosto',
        img: alfanje
    },
    Machete: {
        nombre: 'Machete',
        descripcion: `${corta}`,
        fecha: '23 de agosto al 22 de septiembre',
        img: machete
    },
    Cadena: {
        nombre: 'Cadena',
        descripcion: `${mediana}`,
        fecha: '23 de septiembre al 22 de octubre',
        img: cadena
    },
    Gumia: {
        nombre: 'Gumia',
        descripcion: `${corta}`,
        fecha: '23 de octubre a 22 de noviembre',
        img: gumia
    },
    Arco: {
        nombre: 'Arco',
        descripcion: `${larga}`,
        fecha: '23 de noviembre a 21 de diciembre',
        img: arco
    },
    Lanza: {
        nombre: 'Lanza',
        descripcion: `${larga}`,
        fecha: '22 de diciembre a 20 de enero',
        img: lanza
    }
};

export default listadoArabe;