import React from 'react';
import { Icon } from 'antd';
import styles from './index.less';

const Starts = (props) => {
  const { progress = 100 } = props;
  return (
    <div className={styles.content}>
      <div className={styles.startsBg}>
        <Icon type="star" theme="filled" className={styles.start} />
        <Icon type="star" theme="filled" className={styles.start} />
        <Icon type="star" theme="filled" className={styles.start} />
        <Icon type="star" theme="filled" className={styles.start} />
        <Icon type="star" theme="filled" className={styles.start} />
      </div>
      <div className={styles.starts} style={{ width: `${progress}%` }}>
        <Icon type="star" theme="filled" className={styles.start} />
        <Icon type="star" theme="filled" className={styles.start} />
        <Icon type="star" theme="filled" className={styles.start} />
        <Icon type="star" theme="filled" className={styles.start} />
        <Icon type="star" theme="filled" className={styles.start} />
      </div>

    </div>
  )
}

export default Starts;
