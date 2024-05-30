import { Zoom, toast } from 'react-toastify';
import Toast, { ToastType } from '../../components/toast/toast.component';

import SucessIcon from '../../assets/icons/success.svg';
import AlertIcon from '../../assets/icons/alert.svg';
import ErrorIcon from '../../assets/icons/error.svg';

export class ToastService {
  static getIcon(type: ToastType) {
    switch (type) {
      case 'success':
        return SucessIcon;
      case 'error':
        return ErrorIcon;
      case 'warning':
        return AlertIcon;
      default:
        return ErrorIcon;
    }
  }

  static defaultConfig = {
    autoClose: 5000,
    closeOnClick: true,
    closeButton: false,
    hideProgressBar: true,
    bodyClassName: 'bg-toast_bg  w-50',
    className: 'bg-toast_bg',
    transition: Zoom,
  };

  static alert(message: string, type: ToastType) {
    const icon = ToastService.getIcon(type);
    toast(
      <Toast icon={icon} message={message} type={type} />,
      ToastService.defaultConfig
    );
  }
}
