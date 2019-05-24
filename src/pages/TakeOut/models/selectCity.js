export default {
  namespace: 'selectCity',
  state: {
    inputCity: '',
    letter:'',
  },
  reducers: {
    setInputCity(state, { payload: inputCity }) {
      return { ...state, inputCity }
    },

    setLetter(state,{ payload:letter}){
      return { ...state, letter }
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
