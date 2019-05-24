export default {
  namespace: 'shopList',
  state: {
    sortFilter:'综合排序',
    showSortFilter:false,
    // inputCity: '',
    // letter:'',
  },
  reducers: {
    setShowSortFilter(state,{payload:showSortFilter}){
      return { ...state,showSortFilter}
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
