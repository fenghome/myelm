import React from 'react';
import styles from './index.less';


class CityList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cityList = null, filterText } = this.props;
    // const cityList = [
    //   { label: 'A', citys: ['阿坝县', '阿爸爸'] }
    // ]
    return (
      <div className={styles.list}>
        <div className={styles.label}>
          当前定位城市
        </div>
        <div className={styles.item}>石家庄市</div>
        {
          cityList && cityList.map(item => (
            <div>
              <div className={styles.label}>{item.label}</div>
              {
                item.citys && item.citys.map(city => (
                  <div className={styles.item}>{city}</div>
                ))
              }
            </div>
          )
          )
        }
        {/* <div className={styles.label}>
          当前定位城市
        </div>
        <div className={styles.item}>石家庄市</div>
        <div className={styles.label}>A</div>
        <div className={styles.item}>阿坝县</div>
        <div className={styles.item}>阿巴嘎旗</div>
        <div className={styles.item}>阿尔山市</div>
        <div className={styles.item}>阿合奇县</div>
        <div className={styles.label}>B</div>
        <div className={styles.item}>巴楚县</div>
        <div className={styles.item}>巴东县</div>
        <div className={styles.label}>A</div>
        <div className={styles.item}>阿坝县</div>
        <div className={styles.item}>阿巴嘎旗</div>
        <div className={styles.item}>阿尔山市</div>
        <div className={styles.item}>阿合奇县</div>
        <div className={styles.label}>B</div>
        <div className={styles.item}>巴楚县</div>
        <div className={styles.item}>巴东县</div> */}
      </div>
    )
  }
}

export default CityList;
