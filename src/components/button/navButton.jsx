import React from 'react';

import styles from '../../style/buttonStyle.module.css';

function NavButton(props) {
  return (
    <input type={'button'} value={props.text} className={styles.navButton} 
      style={
        props.isCurrent ? {borderBottom: '3px #F6AF00 solid'} : {}
      }
    />
  );
}

export default NavButton;