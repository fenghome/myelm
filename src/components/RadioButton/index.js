import React from 'react';
import styles from './index.less';

const RadioButton = (props) => {
  const { selected, children, style,onClick } = props;
  return (
    <div className={selected ? styles.radioSelected : styles.radio} style={style} onClick={onClick}>
      {children}
    </div>
  )
}

export default RadioButton;
