import React from 'react';
import styles from './FilterRadio.less';

export default (props) => {

  const { data, onClick, selected } = props;

  const isSelected = (value)=>{
    if(selected.find(i=>i.childVal === value)){
      return true;
    }
    return false;
  }
  return (
    <div>
      <div className={styles.label}>{data.label}</div>
      <div className={styles.itemWrap}>
        {
          data && data.children.map(i => (
            <div
              className={isSelected(i.value) ? styles.itemSelected : styles.item}
              onClick={() => onClick(i.value)}
            >{i.label}</div>
          ))
        }
      </div>
    </div>
  )
}

