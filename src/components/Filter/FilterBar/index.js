import React from 'react';
import styles from './index.less';

export default (props) => {

  const { data, selectVal, onClick } = props;

  return (
    <div className={styles.filterBar}>
      {
        data && data.map(item => (
          <div
            className={selectVal === item.value ? styles.filterItemSelec : styles.filterItem}
            onClick={() => onClick(item.value)}
          >
            <div>{item.label}</div>
            {item.ico && <div>{item.ico()}</div>}
          </div>
        ))
      }
    </div>
  )
}
