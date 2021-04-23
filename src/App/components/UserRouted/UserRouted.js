import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UserRouted.module.scss';
import {
  useParams, withRouter
} from 'react-router-dom'
import store from '../../reducers/store';
import { Avatar, classes } from '@material-ui/core';
const UserRouted = (props) => {
  const [currentUser, setcurrentUser] = useState({img:'img/noimg.png',id:-1,login:''});
//  const param = useParams().userId;
  useEffect(() => {
    let userid=props.match.params.userId
    store.subscribe(() => {
     setcurrentUser(store.getState().tchatUsers.find(e => e.id === parseInt(userid)));
    })
  }, []);
  useEffect(() => {
    let userid=props.match.params.userId;
    setcurrentUser(store.getState().tchatUsers.find(e => e.id === parseInt(userid)));
  }, [props.match.params]);
  return (
    <div className={styles.UserRouted} data-testid="UserRouted">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
        {undefined!==currentUser.img&&<Avatar alt="Remy Sharp" src={'/'+currentUser.img} style={{height:'256px', width:'256px'}} />}
        </div>
        <div style={{ flex: 4, fontSize:'40pt', textDecoration:'underline' }}>
          Login :<span style={{fontSize:'48pt', color : 'tomato', textDecoration:'none' }}>{currentUser.login }</span>
        </div>

      </div>
      <br />{JSON.stringify(props)}
      <br />{JSON.stringify(useParams())}
      <br />{JSON.stringify(currentUser)}
    </div>
  );
}

UserRouted.propTypes = {};

UserRouted.defaultProps = {};

export default withRouter(UserRouted);
