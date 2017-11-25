import React from 'react';
import Controls from '../containers/controls';
import Graph from '../containers/graph';

const styles = {
  container: {
    position: 'relative',
  },
  controls: {
    position: 'absolute',
    top: 0,
  },
};

export default function App() {
  return (
    <div style={styles.container}>
      <Graph />
      <div style={styles.controls}>
        <Controls />
      </div>
    </div>
  );
}
