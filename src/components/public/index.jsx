import React, { Component } from 'react';
import { Carousel, Divider } from 'antd';
// import Banner1 from '../../assets/images/banner/1.jpg';
// import Banner2 from '../../assets/images/banner/2.jpg';
import styles from './index.module.scss';

class Public extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>免费直播课</p>
          <p className={styles.description}>激发学习热情，唤启更好的自己</p>
        </div>
        <Carousel>
          <div>
            <div className={styles.flex}>
              <div className={styles.left}>
                <img src="http://resources.jsmo.xin/templates/upload/8390/201804/1523600634127.jpg" alt="1" />
              </div>
              <div className={styles.right}>
                <div>
                  <p className={styles.className}>青少年法语零基础启蒙班-你好法语A1-14:45 </p>
                  <p className="subtitle">主讲：路星</p>
                </div>
                <Divider />
                <div className={styles.classDescription}>
                  <p>通过《你好法语》A1级别的学习，9个章节，36篇课文，掌握基础的法语口语应用经验丰富，</p>
                  <p>实力强大耐心细致方法有效表达地道应用全科提高冲7分 ...</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Public;
