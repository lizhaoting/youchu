import React, { Component } from 'react';
import { Button } from 'antd';

class HelloWord extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { getUser } = this.props;
    return (
      <>
        <div>Hello Word</div>
        <Button type="submit" onClick={getUser}>getUser</Button>
      </>
    );
  }
}

export default HelloWord;
