export default {
  namespace: 'selectCity',
  state: {
    inputCity: '',
  },
  reducers: {
    setInputCity(state, { payload: inputCity }) {
      return { ...state, inputCity }
    }
  },
  effects: {
    //   *login(action, { call, put }) {
    //     yield put({
    //       type: 'signin',
    //     });
    //     yield put(routerRedux.push('/admin'));
    //   },
    //   *throwError() {
    //     throw new Error('hi error');
    //   },
  },
};
