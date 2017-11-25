export default function getGraph(state) {
  const tree = state.values;
  const nodes = [];
  const edges = [];

  for (let node of tree) {
    const parent = node.parent;

    nodes.push({
      id: Number(node.value),
      label: String(node.value),
      size: 20,
    });

    if (parent) {
      edges.push({
        id: `${parent.value}_to_${node.value}`,
        source: Number(parent.value),
        target: Number(node.value),
      });
    }
  }

  return {
    nodes: nodes,
    edges: edges,
  };
}
