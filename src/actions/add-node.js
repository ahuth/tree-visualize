export default function addNode(value) {
  return {
    type: 'ADD_NODE',
    payload: {
      value: Number(value),
    },
  };
}
