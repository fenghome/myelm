import React from 'react';
import ItemTitle from '../../../components/ItemTitle/index.js';
import styles from './index.less';
import { Icon } from 'antd';

const ShopList = (props)=>{
  return (
    <div className={styles.shopList}>
      <ItemTitle title="推荐商家" />
      <div className={styles.filter}>
      <a>
        <span className={styles.filterItem}>综合排序</span>
        <Icon type="caret-down" style={{width:'1.6vw',height:'1.0666vw',color:'#666'}}/>
      </a>
      <a>
        <span className={styles.filterItem}>距离最近</span>
      </a>
      <a>
        <span className={styles.filterItem}>品质联盟</span>
        <Icon type="caret-down" style={{width:'1.6vw',height:'1.0666vw',color:'#666'}}/>
      </a>
      <a>
        <span className={styles.filterItem}>筛选</span>
        <Icon type="filter" style={{width:'1.6vw',height:'1.0666vw',color:'#666'}}/>
      </a>
      </div>
    </div>
  )
}

export default ShopList;
