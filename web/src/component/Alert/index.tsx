import Swal from 'sweetalert2'

// interface alertProps {
//   text: string;
//   icon: string;
// }

const Alert = (params: any) => {
  Swal.fire({
    ...params
  });
}
export default Alert;