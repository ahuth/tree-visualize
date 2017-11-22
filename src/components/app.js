import React from 'react';
import map from 'lodash.map';

export default function App({ values }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Value</th>
          <th>Parent</th>
          <th>Left</th>
          <th>Right</th>
          <th>Root</th>
        </tr>
      </thead>
      <tbody>
        {map(values, node => (
          <tr key={node.value}>
            <td>{node.value}</td>
            <td>{node.parent}</td>
            <td>{node.left}</td>
            <td>{node.right}</td>
            <td>{node.parent ? undefined : 'Yes'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
