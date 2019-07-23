import React, { Component } from 'react';

class HelloWord extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { getUser } = this.props;
    return (
      <>
        <div>Hello Word</div>
        <button type="submit" onClick={getUser}>getUser</button>
      </>
    );
  }
}

export default HelloWord;
