import CompTest from "./components/comp-test.vue";
const NpmTest = {
  install(Vue) {
    Vue.component("hello-world", CompTest);
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(NpmTest);
}

export default NpmTest;
