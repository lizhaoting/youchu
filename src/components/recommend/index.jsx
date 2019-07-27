import React, { Component } from 'react';
import { Card } from 'antd';
import Recommend1 from '../../assets/images/recommand/1.png';
import Recommend2 from '../../assets/images/recommand/2.png';
import Recommend3 from '../../assets/images/recommand/3.png';
import styles from './index.module.scss';

class Recommend extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div className={styles.container}>
        <Card bordered={false} hoverable className={styles.antCard}>
          <img src={Recommend1} alt="banner2" />
        </Card>
        <Card bordered={false} hoverable className={styles.antCard}>
          <img src={Recommend2} alt="banner2" />
        </Card>
        <Card bordered={false} hoverable className={styles.antCard}>
          <img src={Recommend3} alt="banner2" />
        </Card>
      </div>
    );
  }
}

export default Recommend;
