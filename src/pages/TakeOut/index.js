import React from 'react';
import { Grid, WingBlank, WhiteSpace } from 'antd-mobile';
import Header from './Header';
import Carousel from './MyCarousel';
import styles from './index.less';
import centerBanner from './img/centerBanner.png';
import qualityImg from './img/quality.png';
import ItemTitle from '../../components/ItemTitle/index.js';
import ShopList from './ShopList';
import { Icon } from 'antd';
import SelectCity from './SelectCity';
import { connect } from 'dva';
import Filter from '../../components/Filter';
import FilterPage from '../../components/Filter/FilterPage';

let data = [
  {
    label: '综合排序', value: 'sort', ico: () => (<Icon type="caret-down" />), children: [
      { label: '综合排序', value: 'sort' }, { label: '好评优先', value: 'hpyx' }, { label: '销量最高', value: 'xlzg' }
    ]
  },
  {
    label: '距离最近', value: 'jlzj'
  },
  {
    label: '品质联盟', value: 'pzlm'
  },
  {
    label: '筛选', value: 'sx', filter: true, ico: () => (<Icon type="filter" />), children: [
      {
        label: '商家服务(可多选)', value: 'sjfw', mulit: true, children: [
          { label: '蜂鸟转送', value: 'fnzs', ico: () => (<Icon type="twitter" />) },
          { label: '到店自取', value: 'ddzq', ico: () => (<Icon type="slack-square" />) },
          { label: '品牌商家', value: 'ppsj', ico: () => (<Icon type="twitter" />) },
          { label: '新店', value: 'xd', ico: () => (<Icon type="slack-square" />) },
          { label: '实安保', value: 'sab', ico: () => (<Icon type="twitter" />) },
          { label: '开发票', value: 'kfp', ico: () => (<Icon type="slack-square" />) },
        ]
      },
      {
        label: '优惠活动（单选）', value: 'yhhd', mulit: false, children: [
          { label: '首单立减', value: 'sdlj' },
          { label: '门店新客立减', value: 'mdxklj' },
          { label: '下单返红包', value: 'xdfhb' },
          { label: '进店领红包', value: 'jdlhb' },
          { label: '配送费优惠', value: 'psfyh' },
          { label: '满减优惠', value: 'mjyh' },
        ]
      },
      {
        label: '人均消费', value: 'rjxf', mulit: false, children: [
          { label: '￥20以下', value: '20' },
          { label: '￥20-￥40', value: '40' },
          { label: '￥40-￥60', value: '60' }
        ]
      }
    ]
  }
]

// import SelectLocation from './Header/SelectLocation';
// import Title from '../../components/Title';

// import SortFilter from './SortFilter';

// const data = Array.from(new Array(9)).map((_val, i) => ({
//   icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
//   text: `name${i}`,
// }));

// const crdata = [
//   { img: './img/1.jpg' },
//   { img: './img/2.jpg' },
// ]

const TakeOut = (props) => {

  const { dispatch, filterKey } = props;

  const clickFilterHandler = (key) => {
    dispatch({
      type: 'takeOut/setFilterKey',
      payload: key
    })
  }



  return (
    <div>
      <FilterPage data={data}/>
      {/* <Filter /> */}
      {/* <Title>首页</Title>
        <Header address="石家庄" />
        <div><Carousel data={crdata}/></div>
        <div className="gridStyle">
          <Grid data={data} isCarousel hasLine={false}/>
        </div>
        <WhiteSpace size="md" />
        <WingBlank size="lg">
          <img src={centerBanner} className={styles.bannerLarge} onScroll={()=>{console.log('aaaa')}}/>
          <WhiteSpace size="md" />
          <div className={styles.quality}>
            <a className={styles.item}><img src={qualityImg} /></a>
            <div className={styles.blank} />
            <a className={styles.item}><img src={qualityImg} /></a>
          </div>
          <WhiteSpace size="md" />
          <img src={centerBanner} className={styles.bannerSmall} />
          <WhiteSpace size="md" />
          <img src={centerBanner} className={styles.bannerMiddle} />
      <ShopList clickFilterHandler={clickFilterHandler} filterKey={filterKey} />
      </WingBlank> */}
      {/* <SelectCity /> */}



    </div>

  )

}



function mapStateToProps(state) {
  const { filterKey } = state.takeOut;
  return {
    filterKey
  }
}

export default connect(mapStateToProps)(TakeOut);

