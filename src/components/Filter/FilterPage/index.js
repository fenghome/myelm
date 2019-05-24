import React from 'react';
import FilterMuli from './FilterMuli.js';
import FilterRadio from './FilterRadio.js';
import { Icon } from 'antd';
import styles from './index.less';

const data = [
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
class FilterPage extends React.Component {
  constructor(props) {
    super(props);
    const { muliSelected = [], radioSelected = [] } = props.selectVal || {};
    this.state = {
      filterData: props.data,
      muliSelected: muliSelected,
      radioSelected: radioSelected,//单选结果的数据结构[{value:XX,childVal:'xx'},{value:'yy',childVal:'zz'}]
      clearBtnDisable: muliSelected.length === 0 && radioSelected.length === 0,
    }
  }

  onClickFilterMuli = (v) => {
    const { onClick } = this.props;

    let muliSelected = [];
    if (this.state.muliSelected.includes(v)) {
      muliSelected = this.state.muliSelected.filter(i => {
        return v !== i
      })
    } else {
      muliSelected = [...this.state.muliSelected, v];
    }
    this.setState({
      muliSelected: muliSelected,
      clearBtnDisable: muliSelected.length == 0
    });
    onClick({ muliSelected: muliSelected, radioSelected: this.state.radioSelected });
  }

  onClickFilterRadio = (childVal, value) => {
    const { onClick } = this.props;
    let radioSelected = [];

    if (this.state.radioSelected.find(i => i.value === value && i.childVal === childVal)) {
      radioSelected = this.state.radioSelected.filter(i => i.childVal !== childVal);
    } else if (this.state.radioSelected.find(i => i.value === value && i.childVal !== childVal)) {
      radioSelected = this.state.radioSelected.map(i => {
        if (i.value === value) {
          return { ...i, childVal: childVal }
        }
        return { ...i }
      })
    } else {
      radioSelected = [...this.state.radioSelected, { value: value, childVal: childVal }];
    }

    let clearBtnDisable = true;
    if (radioSelected)
      this.setState({
        radioSelected: radioSelected,
        clearBtnDisable: radioSelected.length == 0
      });

    onClick({ muliSelected: this.state.muliSelected, radioSelected: radioSelected });
  }

  onClickClearBtn = () => {
    const { onClick } = this.props;
    this.setState({
      muliSelected: [],
      radioSelected: [],
      clearBtnDisable: true
    });
    onClick({ muliSelected: [], radioSelected: [] });
  }

  render() {
    const { filterData, muliSelected, radioSelected, clearBtnDisable } = this.state;
    return (
      <div className={styles.children}>
        {
          filterData && filterData.map(i => {
            if (i.mulit) {
              return <FilterMuli data={i} onClick={this.onClickFilterMuli} selected={muliSelected} />
            } else {
              return (
                <FilterRadio
                  data={i}
                  onClick={(chilidVal) => this.onClickFilterRadio(chilidVal, i.value)}
                  selected={radioSelected}
                />
              )
            }
          })
        }
        <div className={styles.btnWrap}>
          <div
            className={clearBtnDisable ? styles.clearBtnDisable : styles.clearBtn}
            onClick={this.onClickClearBtn}
          >清空</div>
          <div className={styles.okBtn}>确定</div>
        </div>

      </div>
    )
  }
}

export default FilterPage;
