import React from 'react';
import { Icon } from 'antd';
import styles from './FilterMuli.less';

class FilterMuli extends React.Component {

  render() {
    const { data, onClick, selected } = this.props;

    const isSelected = (v) => {
      return selected && selected.includes(v);
    }

    return (
      <div>
        <div>{data.label}</div>
        <div className={styles.itemWrap}>
          {
            data && data.children && data.children.map(i => (
              <div
                className={isSelected(i.value) ? styles.itemSelected : styles.item}
                onClick={() => onClick(i.value)}
                key={i.value}
                >
                {i.ico && <div>{i.ico()}</div>}
                <div>{i.label}</div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default FilterMuli;
