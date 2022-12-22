import { Company } from 'api-models/company';
import { AppTheme } from 'theme';

export interface State {
  theme: AppTheme,
  loading: boolean,
  companies: Company[],
  search: string,
}

export const initialState: State = {
  theme: AppTheme.LIGHT,
  loading: false,
  companies: [],
  search: '',
};

export enum ActionType {
  RESET,
  SET_THEME,
  SET_LOADING,
  SET_COMPANIES,
  SET_SEARCH,
}

export interface Action {
  type: ActionType;
  payload?: unknown;
}
