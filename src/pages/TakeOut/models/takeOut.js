export default {
  namespace: 'takeOut',
  state: {
    filterKey:null,
  },
  reducers: {
    setFilterKey(state,{payload:filterKey}){
      return { ...state,filterKey}
    },
    // setInputCity(state, { payload: inputCity }) {
    //   return { ...state, inputCity }
    // },

    // setLetter(state,{ payload:letter}){
    //   return { ...state, letter }
    // }
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
