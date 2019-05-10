import React from 'react';
import { InputItem } from 'antd-mobile'
import { Icon } from 'antd';
import styles from './index.less';

const SearchBar = (props)=>{
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputWrap}>
        <InputItem placeholder='输入城市名和拼音' >
        <Icon type="search" />
        </InputItem>
      </div>
    </div>
  )
}

export default SearchBar;
