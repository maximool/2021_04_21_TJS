import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatViewer.module.scss';

const TchatViewer = (props) => (
  <div className={styles.TchatViewer} data-testid="TchatViewer">
    TchatViewer Component
  </div>
);

TchatViewer.propTypes = {};

TchatViewer.defaultProps = {};

export default TchatViewer;
