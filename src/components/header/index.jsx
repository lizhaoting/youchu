import React, { Component } from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import styles from './index.module.scss';
import Logo from '../../assets/images/logo.png';
import * as actions from '../../actions/header';

const { Search } = Input;

function mapDispatchToProps(dispatch) {
  return {
    changeSearchParams: (payload) => {
      dispatch(actions.changeSearchParams(payload));
    },
    handleSearch: (payload) => {
      dispatch(actions.handleSearch(payload));
    },
  };
}

@connect(state => ({
  searchParam: state.header.searchParam,
}), mapDispatchToProps)
class Header extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { searchParam, changeSearchParams, handleSearch } = this.props;
    return (
      <div className={styles.container}>
        <a href="/">
          <img src={Logo} height="44" alt="logo" />
        </a>
        <div className={styles.searchContainer}>
          <Search
            value={searchParam}
            allowClear
            onChange={e => changeSearchParams(e.target.value)}
            size="large"
            enterButton="搜索"
            onSearch={handleSearch}
            placeholder="请输入"
          />
        </div>
      </div>
    );
  }
}

export default Header;
