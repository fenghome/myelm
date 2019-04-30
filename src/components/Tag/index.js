import React from 'react';
import styles from './index.less';

export default function (props) {
  const { children, level = 'one',style } = props;
  const getFontColor = () => {
    if (level == 'one') return '#5C5C5C';
    if (level == 'two') return '#474747';
    if (level == 'three') return '#fff';
  }

  const getBgColor = () => {
    if (level == 'three') return '#FD436D';
    return '#fff';
  }

  return (
    <div className={styles.tag} style={{ backgroundColor: getBgColor(), color: getFontColor(),...style }} >
      {children}
    </div>
  )
}
