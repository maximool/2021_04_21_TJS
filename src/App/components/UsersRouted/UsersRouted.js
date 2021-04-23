import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UsersRouted.module.scss';
import store, { initialState } from '../../reducers/store';
import { Avatar } from '@material-ui/core';
import Search from '../Search/Search';
const UsersRouted = (props) => {
  const [usersList, setusersList] = useState(initialState.tchatUsers);
  const [users, setusers] = useState(initialState.tchatUsers);
  const [findStr, setfindStr] = useState('');
  useEffect(() => {
    setusersList(store.getState().tchatUsers);
    store.subscribe(() => {
      setusersList(store.getState().tchatUsers);
      setusers(store.getState().tchatUsers.filter(e => e.login.includes(findStr)))
    })
  }, [store.getState().tchatUsers]);
  useEffect(() => {
    setusers(usersList.filter(e => e.login.includes(findStr)))
  }, [findStr]);

  return (
    <div className={styles.UsersRouted} data-testid="UsersRouted">
      <div>
        <h1>Users</h1>
        <Search onChange={(text) => { setfindStr(text) }} />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {users.map((e, i) =>
            <div key={'user-'+i} style={{ flex: 1 }}>
              <Avatar src={e.img} /><br />
              {e.login}
            </div>
          )}
        </div>
      </div>
      <br />{JSON.stringify(props)}

    </div>
  );
}
UsersRouted.propTypes = {};

UsersRouted.defaultProps = {};

export default UsersRouted;
