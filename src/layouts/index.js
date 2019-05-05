
import React from 'react';
import TabBar from '../components/TabBar/index';
import elmIco from './img/elm.png';
import elmIcoSelect from './img/elmSelect.png';
import findIco from './img/find.svg';
import findIcoSelect from './img/findSelect.svg';
import orderIco from './img/order.svg';
import orderIcoSelect from './img/orderSelect.svg';
import myIco from './img/my.svg';
import myIcoSelect from './img/mySelect.svg';
import styles from './index.css';
import Title from '../components/Title';

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTab: 'index'
    }
  }

  render() {
    const { selectTab } = this.state;


    return (
      <div className={styles.body} >
        <div>{this.props.children}</div>
        <div className={styles.tabBar}>
          <TabBar
            titleColor="#bfbfbf"
            titleSelectColor="#1296db"
          >
            <TabBar.Item
              selected={selectTab == 'index'}
              icon={<img src={elmIco} className={styles.icon} />}
              selectIcon={<img src={elmIcoSelect} className={styles.iconSelect} />}
              title="首页"
              onPress={() => {
                this.setState({
                  selectTab: 'index'
                })
              }}
            />
            <TabBar.Item
              selected={selectTab == 'discover'}
              icon={<img src={findIco} className={styles.icon} />}
              selectIcon={<img src={findIcoSelect} className={styles.iconSelect} />}
              title="发现"
              onPress={() => {
                this.setState({
                  selectTab: 'discover'
                })
              }}
            />
            <TabBar.Item
              selected={selectTab == 'order'}
              icon={<img src={orderIco} className={styles.icon} />}
              selectIcon={<img src={orderIcoSelect} className={styles.iconSelect} />}
              title="订单"
              onPress={() => {
                this.setState({
                  selectTab: 'order'
                })
              }}
            />
            <TabBar.Item
              selected={selectTab == 'my'}
              icon={<img src={myIco} className={styles.icon} />}
              selectIcon={<img src={myIcoSelect} className={styles.iconSelect} />}
              title="我的"
              onPress={() => {
                this.setState({
                  selectTab: 'my'
                })
              }}
            />
          </TabBar>

        </div>
      </div>
    );
  }

}

export default BasicLayout;
