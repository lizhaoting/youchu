import React, { Component } from 'react';
import { Card } from 'antd';
import styles from './index.module.scss';
import Class1 from '../../assets/images/class/1.jpg';
import Class2 from '../../assets/images/class/2.jpg';
import Class3 from '../../assets/images/class/3.jpg';
import Class4 from '../../assets/images/class/4.jpg';

// const { Search } = Input;

class Class extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    // const { searchParam, changeSearchParams, handleSearch } = this.props;
    return (
      <>
        <p className={styles.titleContainer}>
          <p className={styles.title}>课程体系</p>
          <p className={styles.description}>直播授课 / 1对1批改 / 及时答疑 / 无限回放</p>
        </p>
        <div className={styles.container}>
          <Card
            className={styles.antCard}
            bordered={false}
            hoverable
            cover={(
              <img
                alt="example"
                src={Class1}
              />
            )}
            actions={[<span>主讲：路飞</span>]}
          >
            <Card.Meta
              title="大学英语四级直通车"
              description="一站式学习体验 / 知心智能推送系统独家授权 TPO考前预测直播循环直播课程 ...选班报名"
            />
          </Card>
          <Card
            className={styles.antCard}
            bordered={false}
            hoverable
            cover={(
              <img
                alt="example"
                src={Class2}
              />
            )}
            actions={[<span>主讲：路飞</span>]}
          >
            <Card.Meta
              title="BEC零基础直达高级全程通关班"
              description="答题方法技巧讲解+真题解析+优学教育一线新概念名师带你突破BEC备考困境 ..."
            />
          </Card>
          <Card
            className={styles.antCard}
            bordered={false}
            hoverable
            cover={(
              <img
                alt="example"
                src={Class3}
              />
            )}
            actions={[<span>主讲：路飞</span>]}
          >
            <Card.Meta
              title="GRE旗舰VIP全程冲分班"
              description="讲解逻辑清晰，分析精辟透彻，授课风格严谨而不失幽默，儒雅而不失激情 ..."
            />
          </Card>
          <Card
            className={styles.antCard}
            bordered={false}
            hoverable
            cover={(
              <img
                alt="example"
                src={Class4}
              />
            )}
            actions={[<span>主讲：路飞</span>]}
          >
            <Card.Meta
              title="优学宝贝全能一级班"
              description="引进先进的以绘本阅读为核心教学理念的进口幼儿英语教材，结合该阶段孩子的 ..."
            />
          </Card>
        </div>
      </>
    );
  }
}

export default Class;
