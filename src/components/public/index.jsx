import React, { Component } from 'react';
import { Carousel, Divider } from 'antd';
import Public1 from '../../assets/images/public/1.jpg';
import Public2 from '../../assets/images/public/2.jpg';
import Public3 from '../../assets/images/public/3.jpg';
import Public4 from '../../assets/images/public/4.jpg';
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
        <Carousel autoplay dots={false}>
          <div>
            <div className={styles.flex}>
              <div className={styles.left}>
                <img src={Public1} alt="1" />
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
          <div>
            <div className={styles.flex}>
              <div className={styles.left}>
                <img src={Public2} alt="1" />
              </div>
              <div className={styles.right}>
                <div>
                  <p className={styles.className}>3500词汇速记精讲 </p>
                  <p className="subtitle">主讲：王子恒</p>
                </div>
                <Divider />
                <div className={styles.classDescription}>
                  <p>帮您记牢、听懂和读准该课程中的核心词汇，为学习听说读写拔高系列课程以及应对各类英语</p>
                  <p>考试打下坚实基础。老师借助科学、有趣的记忆方法并结合历届考试真题，讲练结合，确保学习效果。 ...</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.flex}>
              <div className={styles.left}>
                <img src={Public3} alt="1" />
              </div>
              <div className={styles.right}>
                <div>
                  <p className={styles.className}>法语专业四级考前冲刺班 </p>
                  <p className="subtitle">主讲：石亚清</p>
                </div>
                <Divider />
                <div className={styles.classDescription}>
                  <p>主要讲授法语专业四级考试常考内容及各类题型解题技巧，并以历年法语专业四级考试真题和考点为参考</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.flex}>
              <div className={styles.left}>
                <img src={Public4} alt="1" />
              </div>
              <div className={styles.right}>
                <div>
                  <p className={styles.className}>西班牙语零起点特训班 </p>
                  <p className="subtitle">主讲：Alvaro（西班牙语外教）</p>
                </div>
                <Divider />
                <div className={styles.classDescription}>
                  <p>旨在通过讲授西班牙语最基本的发音规则和最常用的日常交际用语，用简明、有趣、</p>
                  <p>实用的方法帮助西班牙语零基础的学员快速入门</p>
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
