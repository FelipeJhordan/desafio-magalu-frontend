import { ReactSVG } from 'react-svg';

export type ToastProps = {
  message: string;
  icon: string;
  type: ToastType;
};

export type ToastType = 'success' | 'error' | 'warning';

const Toast = ({ icon, message, type }: ToastProps) => {
  const color =
    type === 'success'
      ? 'bg-green-500'
      : type === 'error'
        ? 'bg-red-500'
        : 'bg-yellow-500';
  const fill =
    type === 'success'
      ? 'fill-green-500'
      : type === 'error'
        ? 'fill-red-500'
        : 'fill-yellow-500';
  return (
    <div className=" flex justify-center mr-6 pl-2 ">
      <div className="msg-container ">
        <p className="msg-description text-xs text-white">{message}</p>
      </div>
      <div className={color + ' absolute  w-4 h-full top-0 left-0'}></div>
      <ReactSVG
        src={icon}
        className={fill + ' absolute right-6 top-5 max-h-0.5	 max-w-0.5	'}
      />
    </div>
  );
};

export default Toast;
