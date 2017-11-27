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

export default function Menu() {
  return (
    <ul style={styles.container}>
      <MenuItem label="Rotate left" />
      <MenuItem label="Rotate right" />
    </ul>
  );
}
