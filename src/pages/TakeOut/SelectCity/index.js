import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import Title from '../../../components/Title';
import SearchBar from '../../../components/SearchBar';
import styles from './index.less';


const SelectCity = (props)=>{
  const backCom = (
    <div className={styles.backCom}>
      <Icon type="left" />
      <span>关闭</span>
    </div>
  )
  return (
    <div className={styles.SelectCity}>
      <Title back={backCom}>城市选择</Title>
      <SearchBar />

    </div>
  )
}

function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps)(SelectCity);

