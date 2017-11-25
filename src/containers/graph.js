import { connect } from 'react-redux';
import Graph from '../components/graph';
import { getGraph } from '../selectors';
import { nodeClicked } from '../actions';

function mapStateToProps(state) {
  return {
    graph: getGraph(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNodeClick: event => dispatch(nodeClicked(event.data.node.id, event.data.captor.clientX, event.data.captor.clientY)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
