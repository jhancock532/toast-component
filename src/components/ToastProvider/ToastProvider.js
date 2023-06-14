import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, variant, id) => {
    setToasts((toasts) => [...toasts, { message, variant, id }]);
  };

  const removeToast = (id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
