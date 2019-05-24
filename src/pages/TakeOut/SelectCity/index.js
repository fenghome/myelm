import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import Title from '../../../components/Title';
import SearchBar from '../../../components/SearchBar';
import CityList from '../../../components/CityList';
import LettersBar from '../../../components/LettersBar';
import styles from './index.less';


const SelectCity = (props) => {
  const { dispatch, inputCity,letter } = props;
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

  const onSearchChange = (v)=>{
    dispatch({
      type:'selectCity/setInputCity',
      payload:v
    })
  }

  const onSelectLetter = (l)=>[
    dispatch({
      type:'selectCity/setLetter',
      payload:l
    })
  ]

  return (
    <div className={styles.SelectCity}>
      <Title back={backCom}>城市选择</Title>
      <SearchBar onChange={onSearchChange} />
      <CityList cityList={cityList} filterTxt={inputCity} filterLabel={letter}/>
      <LettersBar onSelectLetter={onSelectLetter}/>
    </div>
  )
}

function mapStateToProps(state) {
  const { inputCity,letter } = state.selectCity;
  return {
    inputCity,
    letter,
  }
}

export default connect(mapStateToProps)(SelectCity);

