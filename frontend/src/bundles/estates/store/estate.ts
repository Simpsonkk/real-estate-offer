import { loadEstates } from './actions.js';
import { actions } from './slice.js';

const allActions = {
  ...actions,
  loadEstates,
};

export { EstateApi as estateApi } from './estate-api.js';
export { allActions as actions };
export { reducer, type State } from './slice.js';
