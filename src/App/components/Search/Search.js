import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.scss';

const Search = (props) => {
  return(<input style={{borderRadius:'8px',minWidth:'100px'}} className={styles.Search}  onChange={(e)=>{
    props.onChange(e.target.value);
  }} data-testid="Search" placeholder="recherche..."/>);}

Search.propTypes = {onChange:PropTypes.func.isRequired};

Search.defaultProps = {};

export default Search;
