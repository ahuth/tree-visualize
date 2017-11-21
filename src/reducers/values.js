import Node from '../node';

const initialState = new Node(5);

export default function values(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
