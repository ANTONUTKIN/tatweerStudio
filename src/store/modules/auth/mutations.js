export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.refreshToken = payload.refreshToken;
    // state.didAutoLogout = false;
  }
  // setAutoLogout(state) {
  //   state.didAutoLogout = true;
  // }
};