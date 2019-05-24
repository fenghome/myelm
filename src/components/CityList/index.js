import React from 'react';
import styles from './index.less';


class CityList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cityList = null, filterTxt = null, filterLabel = null } = this.props;

    //关键字过滤
    if (filterTxt) {
      let cityNames = [];
      cityList && cityList.map(item => {
        item.citys && (cityNames = cityNames.concat(item.citys));
      })
      const cityNamesFilter = cityNames.filter(item => {
        return item.indexOf(filterTxt) != -1;
      })

      return (
        <div className={styles.list}>
          {
            cityNamesFilter.map(city => (
              <div className={styles.list}>
                <div className={styles.item}>
                  {city}
                </div>
              </div>
            ))
          }
        </div>
      )
    }

    //根据标签过滤
    if (filterLabel) {
      if (filterLabel != '#') {
        const cityListFilter = cityList && cityList.filter(item => {
          return item.label === filterLabel;
        })

        return (
          <div className={styles.list}>
            {
              cityListFilter && cityListFilter.map(item => (
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
          </div>
        )
      }
    }

    //正常输出
    return (
      <div className={styles.list}>
        <div className={styles.label}>
          当前定位城市
        </div>
        <div className={styles.item} style={{ borderBottom: 'none' }}>石家庄市</div>
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
      </div>
    )
  }
}

export default CityList;
