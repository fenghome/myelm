import React from 'react';
import { InputItem } from 'antd-mobile'
import { Icon } from 'antd';
import styles from './index.less';

const SearchBar = (props) => {

  const { onChange } = props;

  return (
    <div>
      <div className={styles.searchBar}>
        <div className={styles.inputWarp}>
          <InputItem placeholder='输入城市名和拼音' onChange={(v)=>{onChange(v)}}>
            <Icon type="search" />
          </InputItem>
        </div>
      </div>
      <div className={styles.warp}>
      </div>
    </div>

  )
}

export default SearchBar;
