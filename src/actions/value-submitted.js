export default function addNode(value) {
  return {
    type: 'VALUE_SUBMITTED',
    payload: {
      value: Number(value),
    },
  };
}
