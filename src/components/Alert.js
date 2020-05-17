import React, { useContext } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import AlertContext from './../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <FaInfoCircle />
        {''}
        <span>{alert.msg}</span>
      </div>
    )
  );
};

export default Alert;
