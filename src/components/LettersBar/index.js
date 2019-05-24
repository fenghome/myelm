import React from 'react';
import styles from './index.less';

const Letters = (props) => {
  const { onSelectLetter } = props;
  const letters = ['#','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  return (
    <div className={styles.lettersBar}>
      {
        letters.map(i => (
          <div
            className={styles.lbItem}
            onClick={()=>onSelectLetter(i)}
          >
            {i}
          </div>
        ))
      }
    </div>
  )
}

export default Letters;
