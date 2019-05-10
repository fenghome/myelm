export default {
  namespace: 'addAddress',
  state: {
    contacts: '',
    sex:'man',
    phone: '',
    address: '',
    houseNum: '',
    label: [],
  },
  reducers: {
    setContacts(state, { payload:contacts }) {
      return { ...state, contacts }
    },
    setSex(state,{payload:sex}){
      return { ...state, sex}
    },
    setPhone(state, { payload:phone }) {
      return { ...state, phone }
    },
    setAddress(state, { payload:address }) {
      return { ...state, address }
    },
    setHouseNum(state, { payload:houseNum }) {
      return { ...state, houseNum }
    },
    setLabel(state, { payload:label }) {
      return { ...state, label }
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
