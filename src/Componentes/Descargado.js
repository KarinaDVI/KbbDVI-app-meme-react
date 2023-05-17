import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Descargado = () =>{

    const MySwal = withReactContent(Swal);
    Swal.fire('Hace tu meme favorito y acepta las cookies')
}
export default Descargado;