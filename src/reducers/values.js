import Tree from '../tree';

const initialState = new Tree(5)
  .insert(6)
  .insert(4)
  .insert(3)
  .insert(2)
  .insert(1);

export default function values(state = initialState, action) {
  switch (action.type) {
    case 'VALUE_SUBMITTED':
      return state.insert(action.payload.value);
    default:
      return state;
  }
}
