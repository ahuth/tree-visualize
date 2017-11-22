import Node from '../node';

const initialState = new Node(5);
initialState.insert(6);
initialState.insert(4);
initialState.insert(3);
initialState.insert(2);
initialState.insert(1);

export default function values(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
