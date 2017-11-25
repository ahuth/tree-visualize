import React from 'react';
import Sigma from 'linkurious';
import '../globals';
import 'linkurious/plugins/sigma.layouts.dagre/sigma.layout.dagre';

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

export default class Graph extends React.Component {
  componentDidMount() {
    this.sigma = new Sigma({
      container: this.el,
      graph: this.props.graph,
      settings,
    });

    this.dagreListener = Sigma.layouts.dagre.configure(this.sigma, {
      directed: true,
      rankdir: 'TB',
    });

    Sigma.layouts.dagre.start(this.sigma);
  }

  componentWillUnmount() {
    this.sigma.kill();
  }

  componentDidUpdate(nextProps) {
    if (nextProps.graph !== this.props.graph) {
      this.dagreListener.unbind();
      this.sigma.graph.clear();
      this.sigma.graph.read(this.props.graph);
      this.sigma.refresh();
      Sigma.layouts.dagre.start(this.sigma);
    }
  }

  render() {
    return <div ref={el => this.el = el} style={styles.sigma} />;
  }
}
