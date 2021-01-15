import worksReducer from './works';

const combineReducers = <S = any, A = React.ReducerAction<React.Reducer<any, any>>>
  (reducers: {[K in keyof S]: React.Reducer<S[K], A>}) => {
  const keys = Object.keys(reducers);
  const objectInitState:any = {};

  keys.forEach((key) => {
    objectInitState[key] = reducers[key as keyof S](undefined, { type: '' });
  });

  return objectInitState;
};

const reducers = combineReducers({
  works: worksReducer,
});

export default reducers;
