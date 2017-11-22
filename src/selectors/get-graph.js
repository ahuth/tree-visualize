export default function getGraph(state) {
  const tree = state.values;
  return {
    nodes: getNodes(tree),
    edges: getEdges(tree),
  };
}

function getNodes(tree) {
  const nodes = [];

  for (let node of tree) {
    nodes.push({
      id: node.value,
      label: String(node.value),
      size: 20,
      x: getX(node),
      y: getY(node),
    });
  }

  return nodes;
}

function getEdges(tree) {
  const edges = [];

  for (let node of tree) {
    const parent = node.parent
    if (parent) {
      edges.push({
        id: `${parent.value}_to_${node.value}`,
        source: parent.value,
        target: node.value,
      });
    }
  }

  return edges;
}

function getX(node) {
  let current = node;
  let x = 50;

  while (current.parent) {
    if (current === current.parent.right) {
      x += 10;
    } else {
      x -= 10;
    }
    current = current.parent;
  }

  return x;
}

function getY(node) {
  let current = node;
  let ancestorCount = 0;

  while (current.parent) {
    ancestorCount += 1;
    current = current.parent;
  }

  return ancestorCount * 10;
}
