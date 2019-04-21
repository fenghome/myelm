
import {Grid} from 'antd-mobile';
import Header from './Header';
import Carousel from './MyCarousel';
import styles from './index.less';

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
      <Grid data={data} isCarousel hasLine={false}
        // itemStyle={{backgroundColor:'red',width:40,height:80}}
      />
      </div>

    </div>

  )
}

export default TakeOut;
