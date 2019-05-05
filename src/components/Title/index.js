import React from 'react';
import styles from './index.less';


const Title = (props)=>{
  const { children,back=" ",more=" ",onBackClick,onMoreClick } = props;
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <span className={styles.back}>{back}</span>
        <span className={styles.center}>{children}</span>
        <span className={styles.more}>{more}</span>
      </div>     
    </div>

  )
}

export default Title;