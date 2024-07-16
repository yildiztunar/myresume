const initialState = localStorage.getItem('theme') || 'light';

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;