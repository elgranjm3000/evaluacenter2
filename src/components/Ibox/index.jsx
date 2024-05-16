import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Ibox = ({ title, children, number }) => {
  
  const handleOnPress = () => {
    console.log("hola");
  };

  return (
    <div className="ibox">
      <div className='iboxTitle active'>
        <span className="iboxTitleText">{title}</span>
        
      </div>
      
    </div>
  );
};

export default Ibox;