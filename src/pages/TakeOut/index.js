
import {Grid,WingBlank,WhiteSpace } from 'antd-mobile';
import Header from './Header';
import Carousel from './MyCarousel';
import styles from './index.less';
import centerBanner from './img/centerBanner.png';
import qualityImg from './img/quality.png';
import ItemTitle from '../../components/ItemTitle/index.js';
import ShopList from './ShopList';
import { Icon } from 'antd';
import SelectCity from './SelectCity';


// import SelectLocation from './Header/SelectLocation';
import Title from '../../components/Title';


const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

const TakeOut = (props)=>{
  return (
    <div>
      {/* <Title>首页</Title> */}
      {/* <Header address="石家庄" /> */}
      {/* <div><Carousel /></div>
      <div className="gridStyle">
        <Grid data={data} isCarousel hasLine={false}/>
      </div>
      <WhiteSpace size="md" />
      <WingBlank size="lg">
        <img src={centerBanner} className={styles.bannerLarge} onScroll={()=>{console.log('aaaa')}}/>
        <WhiteSpace size="md" />
        <div className={styles.quality}>
          <a className={styles.item}><img src={qualityImg} /></a>
          <div className={styles.blank} />
          <a className={styles.item}><img src={qualityImg} /></a>
        </div>
        <WhiteSpace size="md" />
        <img src={centerBanner} className={styles.bannerSmall} />
        <WhiteSpace size="md" />
        <img src={centerBanner} className={styles.bannerMiddle} />
        <ShopList />
      </WingBlank> */}
      <SelectCity />



    </div>

  )
}

export default TakeOut;
