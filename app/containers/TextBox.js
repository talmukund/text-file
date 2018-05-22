import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextBox from '../components/TextBox';
import * as CounterActions from '../actions/AddTextAction';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TextBox);
