import { connect } from 'react-redux';
import App from '../components/app';
import { getGraph } from '../selectors';

function mapStateToProps(state) {
  return {
    graph: getGraph(state),
  };
}

export default connect(mapStateToProps)(App);
