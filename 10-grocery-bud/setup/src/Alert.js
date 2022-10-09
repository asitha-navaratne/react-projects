import React, { useEffect } from "react";

const Alert = ({ type, message, removeAlert }) => {
  useEffect(() => {
    const timeout = setInterval(() => {
      removeAlert();
    }, 2000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
