import React from 'react';
import { EdgeShapes, RelativeSize, RandomizeNodePositions, Sigma } from 'react-sigma';
import Dagre from 'react-sigma/lib/Dagre';

const styles = {
  sigma: {
    height: '100vh',
  },
};

const settings = {
  drawEdges: true,
  labelThreshold: 0,
  sideMargin: 10,
};

export default function App({ graph }) {
  return (
    <Sigma renderer="webgl" graph={graph} settings={settings} style={styles.sigma}>
      <EdgeShapes default="line"/>
      <Dagre />
    </Sigma>
  )
}
