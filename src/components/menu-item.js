import React from 'react';

const styles = {
  enabled: {
    cursor: 'pointer',
    padding: '0.4rem',
  },
  disabled: {
    backgroundColor: 'lightGrey',
    padding: '0.4rem',
  }
};

export default function MenuItem({ disabled, label, onClick }) {
  return (
    <li
      onClick={disabled ? undefined : onClick}
      style={disabled ? styles.disabled : styles.enabled}
    >
      {label}
    </li>
  );
}
