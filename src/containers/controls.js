import { connect } from 'react-redux';
import Controls from '../components/controls';
import { addNode } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: (value) => dispatch(addNode(value)),
  };
}

export default connect(null, mapDispatchToProps)(Controls);
