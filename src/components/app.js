import React from 'react';
import { EdgeShapes, Sigma, RandomizeNodePositions, RelativeSize } from 'react-sigma'

const styles = {
  sigma: {
    height: '100vh',
  },
};

const settings = {
  drawEdges: true,
  labelThreshold: 0,
};

export default function App({ graph }) {
  return (
    <Sigma renderer="webgl" graph={graph} settings={settings} style={styles.sigma}>
      <EdgeShapes default="line"/>
      <RandomizeNodePositions>
        <RelativeSize initialSize={15}/>
      </RandomizeNodePositions>
    </Sigma>
  )
}
