import React, { Component } from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import Recommend from '../components/recommend';
import Class from '../components/class';
import Public from '../components/public';
import Quality from '../components/quality';
import ChooseReason from '../components/chooseReason';
import Teacher from '../components/teacher';
import Summary from '../components/summary';
import Footer from '../components/footer';

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
        <Quality />
        <ChooseReason />
        <Teacher />
        <Summary />
        <Footer />
      </>
    );
  }
}

export default Index;
