import React from 'react';
import { EdgeShapes, Sigma } from 'react-sigma';
import Dagre from 'react-sigma/lib/Dagre';
import Updater from './updater';

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

export default function Graph({ graph }) {
  return (
    <Updater graph={graph}>
      <Sigma renderer="canvas" graph={graph} settings={settings} style={styles.sigma}>
        <EdgeShapes default="line"/>
        <Dagre />
      </Sigma>
    </Updater>
  )
}
