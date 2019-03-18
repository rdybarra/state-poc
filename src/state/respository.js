import state from './state';

const repository = {
  listeners: [],

  addFiz() {
    console.log('adding fiz');
    state.fizzes.push('fiz');
    console.log(state);

    repository.publish();
  },

  subscribe(callback) {
    repository.listeners.push(callback);
  },

  publish() {
    repository.listeners.forEach((callback) => {
      callback();
    });
  }
};

export default repository;
