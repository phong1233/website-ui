import React from 'react';
import { useState } from 'react';
import styles from '../../style/homeStyle.module.css';

function PageBox(props) {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.pageBox} onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      { show ?
        <div>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.description}>{props.description}</div>
        </div>
        :<img className={styles.image} src={props.link} alt={props.title} />
      }
    </div>
  );
}

export default PageBox;