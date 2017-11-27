import React from 'react';

const styles = {
  container: {
    backgroundColor: 'white',
    border: '1px solid black',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  item: {
    cursor: 'pointer',
    padding: '0.4rem',
  },
};

export default function Menu() {
  return (
    <ul style={styles.container}>
      <li style={styles.item}>Rotate left</li>
      <li style={styles.item}>Rotate right</li>
    </ul>
  );
}
