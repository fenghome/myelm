import React from 'react';
import ReactDOM from 'react-dom'
import styles from './index.less';
import locationIco from './img/location.svg';
import downIco from './img/down.svg';
import searchIco from './img/search.png';
import SelectLocation from './SelectLocation';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchFloat: false
    }
  }

  componentWillMount() {
    window.addEventListener('scroll', this.onScroll.bind(this), false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this), false)
  }

  onScroll() {
    if (window.scrollY <= 48 && this.state.searchFloat) {
      this.setState({
        searchFloat: false,
      })
    }
    if (window.scrollY > 48 && !this.state.searchFloat) {
      this.setState({
        searchFloat: true,
      })
    }
    console.log(window.scrollY);
  }
  render() {
    const { address } = this.props;
    const searchFloatCom = (
      <div className={styles.searchWrapFloat}>
        <div
          className={styles.search}
        >
        <img src={searchIco} className={styles.searchIco} />
        <span className={styles.searchText}>搜索商家、商品名称</span>
      </div>
    </div>
    )
    return (
      <div className={styles.header}>
        {/* <div className={styles.address}>
          <img src={locationIco} className={styles.locationIco} />
          <div className={styles.locationText}>{address}</div>
          <img src={downIco} className={styles.downIco} />
        </div>
        <div className={styles.searchWrap}>
          <div
            className={styles.search}
          >
            <img src={searchIco} className={styles.searchIco} />
            <span className={styles.searchText}>搜索商家、商品名称</span>
          </div>
        </div>

        {this.state.searchFloat && searchFloatCom} */}
        <SelectLocation />
      </div>
    )
  }
}


export default Header;
