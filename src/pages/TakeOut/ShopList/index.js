import React from 'react';
import ItemTitle from '../../../components/ItemTitle/index.js';
import ShopListItem from './ShopListItem';
import styles from './index.less';
import { Icon } from 'antd';
import { connect } from 'dva';

const ShopList = (props) => {
  const { filterKey,clickFilterHandler } = props;

  return (
    <div className={styles.shopList}>
      <ItemTitle title="推荐商家" />
      <div className={styles.filter}>
        <a onClick={()=>clickFilterHandler('sort')}>
          <span className={styles.filterItem}>综合排序</span>
          <Icon type="caret-down" style={{ width: '1.6vw', height: '1.0666vw', color: '#666' }} />
        </a>
        <a onClick={()=>clickFilterHandler('distance')}>
          <span className={styles.filterItem} style={filterKey == 'distance' ? {fontWeight:700}:null}>距离最近</span>
        </a>
        <a onClick={()=>clickFilterHandler('quality')}>
          <span className={styles.filterItem}>品质联盟</span>
          <Icon type="caret-down" style={{ width: '1.6vw', height: '1.0666vw', color: '#666' }} />
        </a>
        <a onClick={()=>clickFilterHandler('filter')}>
          <span className={styles.filterItem}>筛选</span>
          <Icon type="filter" style={{ width: '1.6vw', height: '1.0666vw', color: '#666' }} />
        </a>
      </div>
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
    </div>
  )
}

export default ShopList;
