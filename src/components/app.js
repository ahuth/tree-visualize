import React from 'react';
import { EdgeShapes, Sigma } from 'react-sigma'

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
    </Sigma>
  )
}
