import React from 'react';
import Controls from '../containers/controls';
import Graph from '../containers/graph';

const styles = {
  container: {
    position: 'relative',
  },
  controls: {
    position: 'absolute',
    zIndex: 1,
  },
};

export default function App() {
  return (
    <div style={styles.container}>
      <div style={styles.controls}>
        <Controls />
      </div>
      <Graph />
    </div>
  );
}
