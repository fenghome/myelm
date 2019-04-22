import React from 'react';
import ItemTitle from '../../../components/ItemTitle/index.js';
import styles from './index.less';

const Recommend = (props)=>{
  return (
    <div className={styles.Recommend}>
      <ItemTitle title="推荐商家" />
      <div className={styles.filterBox}>
      </div>
    </div>
  )
}

export default Recommend;
