import React, { Component } from 'react';
// import { Card } from 'antd';
// import Recommend1 from '../../assets/images/recommand/1.png';
// import Recommend2 from '../../assets/images/recommand/2.png';
// import Recommend3 from '../../assets/images/recommand/3.png';
import styles from './index.module.scss';

class Summary extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header} />
        <div className={styles.footer}>
          <div>
            <span>680,000+</span>
            <p>已结业付费学员</p>
          </div>
          <div>
            <span>326+</span>
            <p>遍布国家及省级市区</p>
          </div>
          <div>
            <span>100%</span>
            <p>优质精英教师</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
