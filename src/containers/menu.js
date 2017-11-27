import { connect } from 'react-redux';
import Menu from '../components/menu';
import { canRotateLeft, canRotateRight } from '../selectors';

function mapStateToProps(state) {
  return {
    canRotateLeft: canRotateLeft(state),
    canRotateRight: canRotateRight(state),
  };
}

export default connect(mapStateToProps)(Menu);
