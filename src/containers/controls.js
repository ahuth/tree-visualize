import { connect } from 'react-redux';
import Controls from '../components/controls';
import { valueSubmitted } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: (value) => dispatch(valueSubmitted(value)),
  };
}

export default connect(null, mapDispatchToProps)(Controls);
