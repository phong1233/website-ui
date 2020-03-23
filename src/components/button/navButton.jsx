import React from 'react';

import styles from '../../style/buttonStyle.module.css';

function NavButton(props) {

  return (
    <input type={'button'} value={props.text} className={styles.navButton} />
  );
}

export default NavButton;