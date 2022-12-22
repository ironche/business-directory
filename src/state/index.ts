import { createContext, useContext, Dispatch } from 'react';
import { State, Action } from './definitions';
import { Actions } from './actions';

interface ContextInterface {
  state: State;
  dispatch: Dispatch<Action>;
  Actions: typeof Actions;
}

export const AppContext = createContext({} as ContextInterface);

export function useAppContext(): ContextInterface {
  return useContext(AppContext);
}

export { initialState } from './definitions';
export { reducer } from './reducer';
export { Actions } from './actions';
