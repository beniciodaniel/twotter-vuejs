import { createStore } from "vuex";
import { UserModule } from "./User";

export default createStore({
  state: {},

  // functions that effect state
  mutations: {},

  // functions that you call throught your application that call mutations
  actions: {},

  modules: {
    UserStore: UserModule,
  },
});
