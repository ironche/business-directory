import { Action, ActionType } from './definitions';
import { AppTheme } from 'theme';
import { Company } from 'api-models/company';

export namespace Actions {
  export function reset(): Action {
    return {
      type: ActionType.RESET,
    };
  }

  export function setTheme(value?: AppTheme): Action {
    return {
      type: ActionType.SET_THEME,
      payload: value ?? AppTheme.LIGHT,
    };
  }

  export function setLoading(value?: boolean): Action {
    return {
      type: ActionType.SET_LOADING,
      payload: Boolean(value),
    };
  }

  export function setCompanies(value?: Company[]): Action {
    return {
      type: ActionType.SET_COMPANIES,
      payload: Array.isArray(value) ? value : [],
    };
  }

  export function setSearch(value?: string): Action {
    return {
      type: ActionType.SET_SEARCH,
      payload: value ?? '',
    };
  }
}
