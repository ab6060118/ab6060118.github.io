import { Reducer } from 'react';
import { Belone } from 'src/data/works';

const initState = {
  filter: Belone.QNAP,
};

type Type = 'UPDATE_WORKS_FILTER';

type UpdateAction = {
  type: Type
  value: typeof initState.filter
};

const worksReducer:Reducer<typeof initState, UpdateAction> = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_WORKS_FILTER':
      return {
        ...state,
        filter: action.value,
      };
    default:
      return state;
  }
};
export default worksReducer;
