import React, { Component } from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import Recommend from '../components/recommend';
import Class from '../components/class';
import Public from '../components/public';

class Index extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <>
        <Header />
        <Banner />
        <Recommend />
        <Class />
        <Public />
      </>
    );
  }
}

export default Index;
