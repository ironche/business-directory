import { State, initialState, Action, ActionType } from './definitions';
import { Company } from 'api-models/company';
import { AppTheme } from 'theme';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.RESET: {
      return {
        ...initialState,
      };
    }
    case ActionType.SET_THEME: {
      return {
        ...state,
        theme: action.payload as AppTheme,
      };
    }
    case ActionType.SET_LOADING: {
      return {
        ...state,
        loading: action.payload as boolean,
      };
    }
    case ActionType.SET_COMPANIES: {
      const companies = action.payload as Company[];
      return {
        ...state,
        companies: companies.sort((a, b) => a.name.localeCompare(b.name)),
      };
    }
    case ActionType.SET_SEARCH: {
      return {
        ...state,
        search: action.payload as string,
      };
    }
    default:
      throw new Error('Unknown action');
  }
}
