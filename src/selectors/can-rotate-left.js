export default function canRotateLeft(state) {
  const tree = state.values;
  const current = state.menu.current;
  const node = tree.find(current);
  return node && node.parent && node.parent.value < current;
}
