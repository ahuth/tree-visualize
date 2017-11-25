const initialState = {
  open: false,
  x: 0,
  y: 0,
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case 'NODE_CLICKED':
      return {
        open: true,
        x: action.payload.x,
        y: action.payload.y,
      };
    default:
      return state;
  }
}
