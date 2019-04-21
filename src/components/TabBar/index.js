import React from 'react';
import styles from './index.less';


class TabBar extends React.Component {
  constructor(props) {
    super(props);
  }

  static Item = (props) => {
    const { icon, selectIcon, title, selected, titleColor, titleSelectColor,onPress } = props;
    return (
      <div className={styles.item} onClick={()=>{onPress && onPress()}}>
        <div>{selected ? selectIcon : icon}</div>
        <div style={{ marginTop: 4, color: selected ? titleSelectColor : titleColor }}>{title}</div>
      </div>
    )
  }

  render() {
    const { children, titleColor, titleSelectColor } = this.props;
    return (
      <div className={styles.tabBar}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            titleColor, titleSelectColor
          })
        })}
      </div>
    )
  }
}

export default TabBar;
