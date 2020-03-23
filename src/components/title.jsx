import React from 'react';
import styles from '../style/titleStyle.module.css'

function Title(props){
  return (
    <div className={styles.titleArea}>
      <div className={styles.title}>
        {props.title}
      </div>
    </div>
  );
}

export default Title