
import {Grid,WingBlank,WhiteSpace } from 'antd-mobile';
import Header from './Header';
import Carousel from './MyCarousel';
import styles from './index.less';
import centerBanner from './img/centerBanner.png';
import qualityImg from './img/quality.png';
import ItemTitle from '../../components/ItemTitle/index.js';


const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

const TakeOut = (props)=>{
  return (
    <div className={styles.takeout}>
      <Header address="石家庄" />
      <Carousel />
      <div className="gridStyle">
        <Grid data={data} isCarousel hasLine={false}/>
      </div>
      <WhiteSpace size="md" />
      <WingBlank size="lg">
        <img src={centerBanner} className={styles.bannerLarge} />
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
        <ItemTitle title="推荐商家" />
      </WingBlank>



    </div>

  )
}

export default TakeOut;
