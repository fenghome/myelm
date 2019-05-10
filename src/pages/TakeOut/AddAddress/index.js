import React from 'react';
import Title from '../../../components/Title';
import styles from './index.less';
import { Icon, Divider } from 'antd';
import { InputItem,Button } from 'antd-mobile';
import RadioButton from '../../../components/RadioButton';
import { connect } from 'dva';



class AddAddress extends React.Component {
  constructor(props) {
    super(props);
  }

  setSex = (sex)=>{
    const { dispatch } = this.props;
    dispatch({
      type:'addAddress/setSex',
      payload:sex,
    })
  }

  render() {
    const backCom = (
      <div className={styles.backCom}>
        <Icon type="left" />
        <span>返回</span>
      </div>
    )

    const { dispatch,sex } = this.props;
    return (
      <div className={styles.addAddress}>
        <Title back={backCom}>我的地址</Title>
        <div className={styles.wrap}>
          <div className={styles.divder} />
          <InputItem>联系人</InputItem>
          <div className={styles.lineRight}>
            <div className={styles.divder} />
            <div className={styles.radioGroup}>
              <RadioButton
                selected={sex==='man'}
                style={{ marginRight: 8 }}
                onClick={()=>this.setSex('man')}
              >
                先生
              </RadioButton>
              <RadioButton
                selected={sex==='woman'}
                onClick={()=> this.setSex('woman')}
              >
                女士
              </RadioButton>
            </div>
          </div>
          <div className={styles.divder} />
          <InputItem>电话</InputItem>
          <div className={styles.divder} />
          <div className={styles.line1}>
            <div className={styles.line1Left}><InputItem>地址</InputItem></div>
            <Icon type="right" />
          </div>
          <div className={styles.divder} />
          <div className={styles.line1}>
            <div className={styles.line1Left}><InputItem>门牌号</InputItem></div>
            <Icon type="form" />
          </div>
          <div className={styles.divder} />
          <div className={styles.line2}>
            <div className={styles.line2Label}>标签</div>
            <div className={styles.line2Btn}>家</div>
            <div className={styles.line2Btn}>学校</div>
            <div className={styles.line2Btn}>公司</div>
          </div>
        </div>
        <div className={styles.divder} />
        <div className={styles.buttonStyle}>
        <Button className={styles.button}>确定</Button>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state){
  const { contacts,sex,phone,address,houseNum,label } = state.addAddress;
  return {
    contacts,
    sex,
    phone,
    address,
    houseNum,
    label,
  }
}

export default connect(mapStateToProps)(AddAddress);
