import { Grid } from 'antd-mobile';
const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));


const Order = (props) => {
  return (
    <div>
      <Grid data={data} isCarousel hasLine={false}
      />
    </div>
  )


}

export default Order;
