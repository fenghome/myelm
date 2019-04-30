import Starts from '../../components/Starts';
import Tag from '../../components/Tag';

const My = (props)=>{
  return (
    <div>
      我的
      <Starts progress="10"/>
      <Tag level='one'>甜品</Tag>
      <Tag level='two'>甜品</Tag>
      <Tag level='three'>甜品</Tag>
    </div>
  )
}

export default My;
