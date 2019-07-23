import { connect } from 'react-redux';
import HelloWordComponent from '../pages/HelloWord';
import * as actions from '../actions';

function mapStateToProps() {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => {
      dispatch(actions.getUser());
    },
    init: () => {
      dispatch(actions.init());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWordComponent);
