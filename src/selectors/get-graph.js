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

    // Add a fake node if necessary to the right so that the tree has the proper binary tree shape.
    if (node.left && !node.right) {
      const fakeId = node.value + 0.5;
      nodes.push({ id: fakeId, color: 'white', size: 0 });
      edges.push({
        id: `${node.value}_fake_edge_right`,
        source: Number(node.value),
        target: fakeId,
        color: 'white',
      });
    }

    // Add a fake node if necessary to the left so that the tree has the proper binary tree shape.
    if (node.right && !node.left) {
      const fakeId = node.value - 0.5;
      nodes.push({ id: fakeId, color: 'white', size: 0 });
      edges.push({
        id: `${node.value}_fake_edge_left`,
        source: Number(node.value),
        target: fakeId,
        color: 'white',
      });
    }
  }

  return { nodes, edges };
}
