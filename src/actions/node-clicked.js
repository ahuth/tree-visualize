export default function nodeClicked(value, x, y) {
  return {
    type: 'NODE_CLICKED',
    payload: { value, x, y },
  };
}
