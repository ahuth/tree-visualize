import React from 'react';

// This component sets a unique `key` on its child element in order to force React to instantiate
// and mount a completely new component. We need to do this because react-sigma does not handle
// changing props very well, and a new graph will not normally be drawn when its props change.
export default class Updater extends React.Component {
  timestamp = Date.now();

  componentWillUpdate(nextProps) {
    if (nextProps.graph !== this.props.graph) {
      this.timestamp = Date.now();
    }
  }

  render() {
    const sigmaElement = React.Children.only(this.props.children);
    return React.cloneElement(sigmaElement, { key: this.timestamp });
  }
}
