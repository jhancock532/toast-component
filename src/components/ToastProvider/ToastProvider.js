import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, variant, id) => {
    setToasts((toasts) => [...toasts, { message, variant, id }]);
  };

  const removeToast = (id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  useEscapeKey(() => {
    setToasts([]);
  });

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
