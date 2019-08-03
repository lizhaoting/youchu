import React, { Component } from 'react';
import { Card } from 'antd';
import styles from './index.module.scss';
import Quality1 from '../../assets/images/quality/1.png';
import Quality2 from '../../assets/images/quality/2.png';
import Quality3 from '../../assets/images/quality/3.png';
import Quality4 from '../../assets/images/quality/4.png';
import Quality5 from '../../assets/images/quality/5.png';
import Quality6 from '../../assets/images/quality/6.png';


const headStyle = {
  border: 'none',
};

class Quality extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <>
        <div className={styles.titleContainer}>
          <p className={styles.title}>实力保证</p>
          <p className={styles.description}>知名精英人士倾力推荐</p>
        </div>
        <div className={styles.container}>
          <Card
            className={styles.antCard}
            bordered={false}
            headStyle={headStyle}
            hoverable
            title={<>
              <img src={Quality1} alt="1" />
            </>}
          >
            <p>获牛津大学出版社独家在线授权教材</p>
            <p>一站式学习体验 / 知心智能推送系统独家授权TPO考前预测直播循环直播课程 ...</p>
          </Card>
          <Card
            className={styles.antCard}
            bordered={false}
            headStyle={headStyle}
            hoverable
            title={<>
              <img src={Quality2} alt="1" />
            </>}
          >
            <p>哈佛师资保障教学</p>
            <p>答题方法技巧讲解+真题解析+优学教育一线新概念名师带你突破BEC备考困境</p>
          </Card>
          <Card
            className={styles.antCard}
            bordered={false}
            headStyle={headStyle}
            hoverable
            title={<>
              <img src={Quality3} alt="1" />
            </>}
          >
            <p>品牌全新升级，推出</p>
            <p>一站式学习体验 / 知心智能推送系统独家授权TPO考前预测直播循环直播课程 ...</p>
          </Card>
          <Card
            className={styles.antCard}
            bordered={false}
            headStyle={headStyle}
            hoverable
            title={<>
              <img src={Quality4} alt="1" />
            </>}
          >
            <p>数学奥林匹克高级教练金荣</p>
            <p>一站式学习体验 / 知心智能推送系统独家授权TPO考前预测直播循环直播课程 ...</p>
          </Card>
          <Card
            className={styles.antCard}
            bordered={false}
            headStyle={headStyle}
            hoverable
            title={<>
              <img src={Quality5} alt="1" />
            </>}
          >
            <p>成立美国学术顾问委员会</p>
            <p>答题方法技巧讲解+真题解析+优学教育一线新概念名师带你突破BEC备考困境 ...</p>
          </Card>
          <Card
            className={styles.antCard}
            bordered={false}
            headStyle={headStyle}
            hoverable
            title={<>
              <img src={Quality6} alt="1" />
            </>}
          >
            <p>四大年度教育奖项</p>
            <p>一站式学习体验 / 知心智能推送系统独家授权TPO考前预测直播循环直播课程 ...</p>
          </Card>
        </div>
      </>
    );
  }
}

export default Quality;
