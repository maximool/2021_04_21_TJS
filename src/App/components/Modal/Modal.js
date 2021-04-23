import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import { Button } from '@material-ui/core';
import store, { initialState, TCHAT_ACTIONS } from '../../reducers/store';

const Modal = (props) =>{ 
  const [modal, setmodal] = useState(initialState.modal);
  useEffect(() => {
      store.subscribe(()=>{
        setmodal(store.getState().modal)
      })
  }, []);
  return 
  {modal.isOpen?(
  <div className={styles.Modal} style={{position:'absolute',top:0,bottom:0,left:0,right:0}} data-testid="Modal">
   <div style={{position:'absolute',top:'50vh',bottom:'50vh',left:'50vw',right:'50vw'}}>
      {modal.children}
      <br/>
      <Button onClick={()=>{store.dispatch({type:TCHAT_ACTIONS.CLOSE_MODAL})}}>Fermer</Button>
   </div>
  </div>
):null;

}

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
