import React from 'react';
import styles from './index.less';
import Title from '../../../components/Title';
import { Flex, WingBlank, WhiteSpace, InputItem } from 'antd-mobile';
import { Icon } from 'antd';
import LocIco from './img/locIco';

const SelectLocation = (props) => {
  const backCom = (<div className={styles.backCom}><Icon type="left" /><span>返回</span></div>);


  return (
    <div className={styles.content}>
      <Title back={backCom} more='新增地址' onBackClick={props.onBackClick}>选择地址</Title>
      <div className={styles.line}>
        <WhiteSpace size='xl' />
        <div className={styles.inputAddress}>
          <Flex>
            <Flex><span style={{ color: '#5C5C5C' }}>石家庄</span><Icon type="caret-down" /></Flex>
            <Flex.Item>
              <div className={styles.input}>
                <InputItem placeholder="请输入地址"  >
                  <Icon type="search" />
                </InputItem>
              </div>
            </Flex.Item>
          </Flex>
        </div>
        <WhiteSpace size='lg' />
      </div>
      <div className={styles.label}>
        当前地址
      </div>
      <WhiteSpace size='lg' />
      <div className={styles.line}>
        <div className={styles.currAddress}>
          <span className={styles.currAddressLeft}>
            河北省石家庄市新华区革新街道...
        </span>
          <span className={styles.currAddressRight}>
            <LocIco className={styles.ico} fill='#2395ff' />
            <span className={styles.text}>重新定位</span>
          </span>
        </div>
      </div>
      <div className={styles.label}>
        收货地址
      </div>
      <div className={styles.line}>
        <div className={styles.receAddress}>
          <div>
            <span className={styles.name}>冯岩</span>
            <span className={styles.phone}>13930100528</span>
          </div>
          <div>
            河北省石家庄市新华区泰华街
        </div>
        </div>
      </div>

    </div>

  )
}

export default SelectLocation;
