const initialState = {
  open: false,
  x: 0,
  y: 0,
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case 'BODY_CLICKED':
      return initialState;
    case 'NODE_CLICKED':
      return {
        open: true,
        x: action.payload.x,
        y: action.payload.y,
      };
    case 'VALUE_SUBMITTED':
      return initialState;
    default:
      return state;
  }
}
