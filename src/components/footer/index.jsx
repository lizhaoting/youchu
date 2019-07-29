import React, { Component } from 'react';
import styles from './index.module.scss';

class Footer extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.flex}>
          <p>网站建设文化传播有限公司</p>
          <p>地址：Address：HQ: Bldg. 120-121, Pinghuan Industrial</p>
          <p>邮编：100000</p>
        </div>
        <div className={styles.flex}>
          <p />
          <p>电话：400-888-8888</p>
          <p>手机：188-6666-5188</p>
        </div>
        <div className={styles.flex}>
          <p />
          <p>传真：000-66668888</p>
          <p>邮箱：229011960@qq.com</p>
        </div>
      </div>
    );
  }
}

export default Footer;
