import React from 'react';
import MenuItem from './menu-item';

const styles = {
  container: {
    backgroundColor: 'white',
    border: '1px solid black',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

export default function Menu({ canRotateLeft, canRotateRight }) {
  return (
    <ul style={styles.container}>
      <MenuItem disabled={!canRotateLeft} label="Rotate left" />
      <MenuItem disabled={!canRotateRight} label="Rotate right" />
    </ul>
  );
}
