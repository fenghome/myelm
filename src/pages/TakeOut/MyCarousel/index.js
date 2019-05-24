import { Carousel } from 'antd-mobile';
import styles from './index.less';
// import b1 from './img/1.jpg';
// import b2 from './img/2.jpg';
// import b3 from './img/3.jpg';
// import b4 from './img/4.jpg';



const MyCarousel = (props)=>{
  const { data } = props;
  return (
    <Carousel
    dots={true}
    autoplay={true}
    autoplayInterval={1000}
    infinite={true}
  >
    {
      data && data.map(c=>(
        <a>
          <img src={require(c.img+'')} className={styles.img} />
        </a>
      ))
    }
  </Carousel>
  )
}

export default MyCarousel;
