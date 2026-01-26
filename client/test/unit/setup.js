let storage = {};

const localStorageMock = {
  getItem: (key) => storage[key],
  setItem: (key, value) => (storage[key] = typeof value !== 'undefined' ? value.toString() : ''),
  clear: () => (storage = {})
};
global.localStorage = localStorageMock;

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
