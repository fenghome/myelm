import React from 'react';
import styles from './index.less';
import { Icon } from 'antd';

class SortFilter extends React.Component {

  constructor(props) {
    super(props);
  }

  static Item = (props) => {
    const { selected=false,onClick,value } = props;
    return (
      <div className={styles.sortItem} onClick={()=>onClick(value)}>
        <div className={selected ? styles.sortItemLeftSelected:styles.sortItemLeft}>{props.children}</div>
        {selected && <div className={styles.sortItemRight}><Icon type="check" style={{color:'#0C9FE4'}}/></div>}
      </div>
    )
  }

  render() {
    const { onSelected } = this.props;
    return (
      <div className={styles.sortFilter}>
        {
          React.Children.map(this.props.children,function(child){
            return React.cloneElement(child, {
              onClick: onSelected
            })
          })
        }
      </div>
    )
  }
}


export default SortFilter;
