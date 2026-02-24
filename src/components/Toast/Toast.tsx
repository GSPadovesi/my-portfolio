import { ToastContainer, type ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 3200,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'dark',
};

export const AppToast = () => {
  return <ToastContainer {...baseOptions} newestOnTop limit={3} />;
};
