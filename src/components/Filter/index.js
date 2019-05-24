import React from 'react';
import { Icon } from 'antd';
import FilterChild from './FilterChild';
import FilterBar from './FilterBar';
import FilterPage from './FilterPage';
import styles from './index.less';

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
    label: '筛选', value: 'sx', filterPage: true, ico: () => (<Icon type="filter" />), children: [
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

class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterBarData: data,
      filterBarVal: null,
      isFilterPage: false,
      childData: null,
      filterChildVal: null,
      filterPageVal: null,
    }
  }

  onClickFilterBar = (v) => {
    //得到被点击的filterBar项对象数据
    const child = this.state.filterBarData && this.state.filterBarData.find(i => {
      return i.value === v
    });
    //得到被点击的filterBar项是否是过滤页面
    let isFilterPage = child && child.filterPage;
    //得到被点击的filterBar项的子项数据
    let childData = child && child.children && child.children;
    //当两次点击同一个barItem时，第二次会不显示childData
    if (this.state.filterBarVal == v && this.state.childData) {
      childData = null;
      isFilterPage = false;
    }
    this.setState({
      filterBarVal: v,
      isFilterPage: isFilterPage,
      childData: childData,
    })
  }

  onClickFilterChild = (v, l) => {
    const filterBarData = this.state.filterBarData.map(i => {
      if (i.value === this.state.filterBarVal) {
        return { ...i, label: l, value: v }
      }
      return i;
    })
    this.setState({
      filterBarData: filterBarData,
      filterBarVal: v,
      childData: null,
      filterChildVal: v,
    })
  }

  onClickFilterPage = (obj) => {
    this.setState({
      filterPageVal: obj
    })
  }

  render() {

    const { selecVal, onClickFilter } = this.props;

    return (
      <div>
        <FilterBar
          data={this.state.filterBarData}
          onClick={this.onClickFilterBar}
          selectVal={this.state.filterBarVal}
        />
        {this.state.childData && (
          <div className={styles.childWrap}>
            {
              !this.state.isFilterPage ?
                (
                  <FilterChild
                    data={this.state.childData}
                    onClick={this.onClickFilterChild}
                    selectVal={this.state.filterChildVal}
                  />

                ) : (

                  <FilterPage
                    data={this.state.childData}
                    onClick={this.onClickFilterPage}
                    selectVal={this.state.filterPageVal}
                  />
                )
            }
          </div>
        )
        }
      </div>

    )
  }
}

export default Filter;
