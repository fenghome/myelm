import React from 'react';
import styles from './index.less';
import { Icon, Divider } from 'antd';
import Tag from '../../../../components/Tag';
import Starts from '../../../../components/Starts';

const ShopListItem = (props) => {

  const moreIconStyle = {
    marginTop: '0.5vw',
    color: '#000',
    fontWeight: 1000,
    fontSize: '4vw',
  }

  return (
    <div className={styles.shopListItem}>
      <div className={styles.shopInfo}>
        <img src={require('./img/1.png')} className={styles.shopLogo} />
        <div className={styles.shopContent}>
          <div className={styles.spaceBwtweenline}>
            <div>
              <span className={styles.premium}>品牌</span>
              <span className={styles.shopName}>DQ冰淇淋（海悦天地广场店)</span>
            </div>
            <Icon type="ellipsis" style={moreIconStyle} />
          </div>
          <div className={styles.spaceBwtweenline}>
            <div>
              <Starts progress="30" />
              <span className={styles.score}>4.9</span>
              <span className={styles.SalesVolume}>月售108单</span>
            </div>
            <span className={styles.express}>蜂鸟专送</span>
          </div>
          <div className={styles.spaceBwtweenline}>
            <div>
              <span>¥20起送</span>
              <Divider type="vertical" style={{ backgroundColor: '#7e7e7e' }} />
              <span>配送费¥3</span>
            </div>
            <div>
              <span>2.74Km</span>
              <Divider type="vertical" style={{ backgroundColor: '#7e7e7e' }} />
              <span>25分钟</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.shopMore}>
        <Tag level="three" style={{ marginRight: '1.066vw' }}>迎春季</Tag>
        <Tag style={{ marginRight: '1.066vw' }}>甜品</Tag>
        <Tag level="two">品质联盟</Tag>
      </div>
      <div className={styles.promotion}>
        <Divider style={{ marginTop: '3.733vw', marginBottom: '1.6vw' }} />
        <div className={styles.spaceBwtweenline}>
          <div className={styles.lineLeft}>
            <span className={styles.ico} style={{ backgroundColor: 'rgb(240, 115, 115)' }}>减</span>
            <span className={styles.promotionMessage}>满20减2，满30减6，满40减8，满50减10</span>
          </div>
          <div>
            <span style={{ marginRight: '1.6vw' }}>5个活动</span>
            <Icon type="caret-down" />
          </div>
        </div>
        <div className={styles.spaceBwtweenline} style={{marginTop:'2.133vw'}}>
          <div className={styles.lineLeft}>
            <span className={styles.ico} style={{ backgroundColor: 'rgb(240, 115, 115)' }}>减</span>
            <span className={styles.promotionMessage}>新用户下单立减18元</span>
          </div>
        </div>


      </div>

    </div>
  )
}

export default ShopListItem;
