import React, { Component } from 'react';
import { Button } from 'antd';
import styles from './index.module.scss';
import image from '../../assets/images/chooseReason/1.png';

// const { Search } = Input;

class Class extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    // const { searchParam, changeSearchParams, handleSearch } = this.props;
    return (
      <>
        <div className={styles.container}>
          <div className={styles.left}>
            <img src={image} alt="left" />
          </div>
          <div className={styles.right}>
            <p className={styles.title}>为什么选择有初教育？</p>
            <p>除全球外教外，更有中国数学奥林匹克金牌教练领队，打造高效的数学在线课堂英语+数学，</p>
            <p>口语、考分双提升</p>
            <p>◎   全球英语外教获TESOL/TEFL认证，并有数学金牌教练；</p>
            <p>◎   根据孩子年龄、水平、学习需求，量身定制最适合内容。</p>
            <p>◎   特级教师金荣生领衔</p>
            <p>◎   2000+套标准课件搭配个性化动态课程体系，层层递进上升</p>
            <p>◎   2016年度最具影响力外语培训品牌</p>
            <Button>免费领取体验课</Button>
          </div>
        </div>
      </>
    );
  }
}

export default Class;
