import { Carousel } from 'antd-mobile';
import styles from './index.less';
import b1 from './img/1.jpg';
import b2 from './img/2.jpg';
import b3 from './img/3.jpg';
import b4 from './img/4.jpg';

const MyCarousel = (props)=>{
  return (
    <Carousel
    dots={true}
    autoplay={true}
    autoplayInterval={1000}
    infinite={true}
  >
    <a>
      <img src={b1} className={styles.img} />
    </a>
    <a>
      <img src={b2} className={styles.img} />
    </a>
    <a style={{width:'100%',height:'80px'}}>
      <img src={b3} className={styles.img} />
    </a>
    <a style={{width:'100%',height:'80px'}}>
      <img src={b4} className={styles.img} />
    </a>

  </Carousel>
  )
}

export default MyCarousel;
