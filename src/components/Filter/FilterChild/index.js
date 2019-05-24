import React from 'react';
import { Icon } from 'antd';
import styles from './index.less';

const FilterChild = (props) => {
  const { data,selectVal,onClick } = props;
  return (
    <div className={styles.child}>
      {
        data && data.map(children => (
          <div className={selectVal === children.value ? styles.childItemSelec : styles.childItem}
            onClick={()=>onClick(children.value,children.label)}
          >
            <span>{children.label}</span>
            {selectVal === children.value && <Icon type="check" />}
          </div>
        ))
      }
    </div>
  )
}

export default FilterChild;
