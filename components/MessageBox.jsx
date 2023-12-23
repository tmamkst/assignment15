
import React from 'react';

const MessageBox = ({ type, text }) => {
  return( 
  <div className={`messageBox ${type}`}>{text}
  </div>
  );
};

export default MessageBox;
