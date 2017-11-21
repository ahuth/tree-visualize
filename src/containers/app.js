import { connect } from 'react-redux';
import App from '../components/app';
import { getValues } from '../selectors';

function mapStateToProps(state) {
  return {
    values: getValues(state),
  };
}

export default connect(mapStateToProps)(App);
