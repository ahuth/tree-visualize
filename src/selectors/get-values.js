export default function getValues(state) {
  const tree = state.values;
  const flattened = {};

  for (let node of tree) {
    flattened[node.value] = {
      value: node.value,
      left: node.left ? node.left.value : null,
      right: node.right ? node.right.value : null,
      parent: node.parent ? node.parent.value : null,
    };
  }

  return flattened;
}
