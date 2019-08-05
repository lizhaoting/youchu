import React, { Component } from 'react';
import { Card } from 'antd';
import styles from './index.module.scss';


class Teacher extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <>
        <div className={styles.titleContainer}>
          <p className={styles.title}>名师堂</p>
          <p className={styles.description}>知名精英人士名师团队</p>
        </div>
        {/* <Carousel autoplay className={styles.container}>
          <div>

          </div>
          <div>
            <div className={styles.teacherBox}>
              <Card
                bordered={false}
                hoverable
                className={styles.antdCard}
              >
                <div>
                  <span className={styles.teacherName}>宋健舟</span>
                  <span className={styles.teacherClass}>集团优秀教师 - 数学</span>
                </div>
                <div>
                  <p className={styles.teacherClass}>北京师范大学教育硕士。曾教授新概念6年半，对于英语学科内在体系有深刻的理解。授课风格充满激情，坚持“课堂的中心应是学生”的理念。请上课的同学们做好准备，迎接辛苦但快乐的学习！</p>
                </div>
              </Card>
              <Card
                bordered={false}
                hoverable
                className={styles.antdCard}
              >
                <div>
                  <span className={styles.teacherName}>李丹宁</span>
                  <span className={styles.teacherClass}>优秀数学教师</span>
                </div>
                <div>
                  <p className={styles.teacherClass}>毕业于上海师范大学，拥有4年以上小学奥数的教学经验。曾任职于上海某知名教育机构，在这几年间带过从提高班、尖子班到资优高端班等多种类型的班级体系,有着丰富的与孩子交流的经验，熟知孩子心理，亲和力强</p>
                </div>
              </Card>
            </div>
          </div>
        </Carousel> */}
        <div className={styles.teacherBox}>
          <Card
            bordered={false}
            hoverable
            className={styles.antdCard}
          >
            <div>
              <span className={styles.teacherName}>刘思泉</span>
              <span className={styles.teacherClass}>优秀教师 - 数学</span>
            </div>
            <div>
              <p className={styles.teacherClass}>五年的数学家教经验，数学知识功底扎实，所教授的孩子们数学成绩进步很大，深受家长和孩子们的喜爱。课堂轻松幽默又不失严谨，注重对孩子们思维和习惯的培养，善于调动孩子们的兴趣 ...</p>
            </div>
          </Card>
          <Card
            bordered={false}
            hoverable
            className={styles.antdCard}
          >
            <div>
              <span className={styles.teacherName}>周思</span>
              <span className={styles.teacherClass}>优秀数学教师</span>
            </div>
            <div>
              <p className={styles.teacherClass}>北京师范大学教育硕士。曾教授新概念6年半，对于英语学科内在体系有深刻的理解。授课风格充满激情，坚持“课堂的中心应是学生”的理念。请上课的同学们做好准备，迎接辛苦但快乐的学习！</p>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default Teacher;
