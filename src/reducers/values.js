import Tree from '../tree';

let initialState = new Tree(5);
initialState = initialState.insert(6);
initialState = initialState.insert(4);
initialState = initialState.insert(3);
initialState = initialState.insert(2);
initialState = initialState.insert(1);

export default function values(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NODE':
      return state.insert(action.payload.value);;
    default:
      return state;
  }
}
