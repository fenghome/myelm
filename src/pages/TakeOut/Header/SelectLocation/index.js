import React from 'react';
import styles from './index.less';
import Title from '../../../../components/Title';
import { Icon,Flex } from 'antd-mobile';

const SelectLocation = (props)=>{
  const backCom = (<div><Icon type='left' size='lg' />返回</div>);
  
  return (
    <div className={styles.content}>
      <Title back={backCom} more='新增地址1111'>地址</Title>
      <Flex>
        <span>石家庄<Icon type="check" /></span>
      </Flex>
    </div>

  )
}

export default SelectLocation;