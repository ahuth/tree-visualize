import React from 'react';
import map from 'lodash.map';

export default function App({ values }) {
  return (
    <ul>
      {map(values, node => <li key={node.value}>{node.value}</li>)}
    </ul>
  )
}
