const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    isLoggedUser: !!localStorage.getItem("token")
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        const user = { ...action.payload };
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", user.token);
        delete user.password;
        return {
          ...state,
          user: user,
          isLoggedUser: true
        };
      case 'CLEAR_USER':
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        return {
          ...state,
          user: {},
          isLoggedUser: false
        };
      default:
        return state;
    }
  };
  
  export default userReducer;