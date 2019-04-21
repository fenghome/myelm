import React from 'react';
import styles from './index.less';
import locationIco from './img/location.svg';
import downIco from './img/down.svg';
import searchIco from './img/search.png';

const Header = (props)=>{
  const { address } = props;
  return (
    <div className={styles.header}> 
      <div className={styles.address}>
        <img src={locationIco} className={styles.locationIco} />
        <div className={styles.locationText}>{address}</div>
        <img src={downIco} className={styles.downIco} />
      </div>
      <div className={styles.search}>
        <img src={searchIco} className={styles.searchIco}/>
        <span className={styles.searchText}>搜索商家、商品名称</span>
      </div>
    </div>
  )
}

export default Header;