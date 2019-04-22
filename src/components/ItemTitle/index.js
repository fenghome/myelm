import React from 'react';
import styles from './index.less';
const ItemTitle = (props)=>{
  const { title } = props;
  return (
    <div className={styles.title}>
      {title}
    </div>
  )
}

export default ItemTitle;
