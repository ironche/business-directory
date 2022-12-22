import { Theme } from '@mui/material/styles';
import { lightTheme } from './light';
import { darkTheme } from './dark';

export enum AppTheme {
  LIGHT,
  DARK,
}

export function getTheme(variant: AppTheme = AppTheme.LIGHT): Theme {
  switch (variant) {
    case AppTheme.DARK:
      return darkTheme;
    default:
      return lightTheme;
  }
}
