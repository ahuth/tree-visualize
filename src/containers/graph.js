import { connect } from 'react-redux';
import Graph from '../components/graph';
import { getGraph } from '../selectors';

function mapStateToProps(state) {
  return {
    graph: getGraph(state),
  };
}

export default connect(mapStateToProps)(Graph);
