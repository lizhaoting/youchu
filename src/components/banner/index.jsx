import React, { Component } from 'react';
import { Carousel } from 'antd';
import Banner1 from '../../assets/images/banner/1.jpg';
import Banner2 from '../../assets/images/banner/2.jpg';
import styles from './index.module.scss';

class Banner extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <Carousel className={styles.container}>
        <div>
          <img src={Banner1} alt="banner1" />
        </div>
        <div>
          <img src={Banner2} alt="banner2" />
        </div>
      </Carousel>
    );
  }
}

export default Banner;
