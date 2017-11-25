import React from 'react';
import Controls from '../containers/controls';
import Graph from '../containers/graph';
import Menu from './menu';

const styles = {
  container: {
    position: 'relative',
  },
  controls: {
    position: 'absolute',
    top: 0,
  },
  menu: {
    position: 'absolute',
  },
};

export default function App({ menuOpen, menuPosition }) {
  return (
    <div style={styles.container}>
      <Graph />
      <div style={styles.controls}>
        <Controls />
      </div>
      {menuOpen &&
        <div style={{ ...styles.menu, top: menuPosition.y, left: menuPosition.x }}>
          <Menu />
        </div>
      }
    </div>
  );
}
