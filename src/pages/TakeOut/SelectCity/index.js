import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import Title from '../../../components/Title';
import SearchBar from '../../../components/SearchBar';
import CityList from '../../../components/CityList';
import styles from './index.less';


const SelectCity = (props) => {
  const backCom = (
    <div className={styles.backCom}>
      <Icon type="left" />
      <span>关闭</span>
    </div>
  )
  const cityList = [
    {label:'A',citys:['啊啊啊啊','报表报表不','啛啛喳喳']},
    {label:'B',citys:['到樊娟调','大家佛','哦啊奇偶给']},
  ]
  return (
    <div className={styles.SelectCity}>
      <Title back={backCom}>城市选择</Title>
      <SearchBar />
      <CityList cityList={cityList}/>
      <div className={styles.rightBar}>
        <div className={styles.rbItem}>A</div>
        <div className={styles.rbItem}>B</div>
        <div className={styles.rbItem}>C</div>
        <div className={styles.rbItem}>D</div>
        <div className={styles.rbItem}>E</div>
        <div className={styles.rbItem}>F</div>
      </div>


    </div>
  )
}

function mapStateToProps(state) {
  const { inputCity } = state.selectCity;
  return {
    inputCity,
  }
}

export default connect(mapStateToProps)(SelectCity);

