import React from 'react';
import PropTypes from 'prop-types';
import './FormUser.scss';

const FormUser = (props) => (
  <form name="user-form" id="user-form" className="FormUser" data-testid="FormUser">
    id:{props.user.id}<br/>
    login:<input type="text" placeholder="nom" onChange={e=>{
      props.onchangevalue({...props.user,login:e.target.value})
    }} value={props.user.login} /><br/>
    password:<input type="text" onChange={e=>{
      props.onchangevalue({...props.user,password:e.target.value})
    }} placeholder="mot de passe" value={props.user.password}/><br/>
  </form>
);

FormUser.propTypes = {user:PropTypes.object, onchangevalue:PropTypes.func.isRequired};

FormUser.defaultProps = {};

export default FormUser;
