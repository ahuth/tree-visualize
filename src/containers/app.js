import { connect } from 'react-redux';
import App from '../components/app';
import { getMenuOpen, getMenuPosition } from '../selectors';

function mapStateToProps(state) {
  return {
    menuOpen: getMenuOpen(state),
    menuPosition: getMenuPosition(state),
  };
}

export default connect(mapStateToProps)(App);
