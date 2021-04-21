import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.scss';

const User = (props) => (
  <div className={styles.User} data-testid="User">
      id:{props.user.id}<br/>
      password:{props.user.password}<br/>
      login:{props.user.login}<br/>
  </div>
);

User.propTypes = {};

User.defaultProps = {};

export default User;
