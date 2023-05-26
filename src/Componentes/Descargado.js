import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Descargado = () =>{

    const MySwal = withReactContent(Swal);
    Swal.fire('Para editar el texto clickealo que quede rojo')
}
export default Descargado;