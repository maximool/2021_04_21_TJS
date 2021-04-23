import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UsersRouted.module.scss';
import { initialState } from '../../reducers/store';
import { Avatar } from '@material-ui/core';
import Search from '../Search/Search';
const UsersRouted = (props) => {
  const [users, setusers] = useState(initialState.tchatUsers);
  const [findStr, setfindStr] = useState('');
  useEffect(() => {
    
  }, []);
  return (
  <div className={styles.UsersRouted} data-testid="UsersRouted">
    <div>
    <h1>Users</h1>
          <Search onChange={(text)=>{}}></Search>
      <div style={{display:'flex', flexWrap:'wrap'}}>
        {users.map((e,i)=>
          <div style={{flex:1}}>
              <Avatar src={e.img}/><br/>
              {e.login}
          </div>
        )}
      </div>
    </div>
    <br/>{JSON.stringify(props)}

  </div>
);
}
UsersRouted.propTypes = {};

UsersRouted.defaultProps = {};

export default UsersRouted;
