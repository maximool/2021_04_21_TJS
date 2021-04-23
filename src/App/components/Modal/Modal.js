import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = () =>{ 
  const [modal, setmodal] = useState({show:false,message:''});
  return (
  <div className={styles.Modal} style={{position:'absolute',top:0,bottom:0,left:0,right:0}} data-testid="Modal">
   <div style={{position:'absolute',top:'50vh',bottom:'50vh',left:'50vw',right:'50vw'}}>

   </div>
  </div>
);}

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
