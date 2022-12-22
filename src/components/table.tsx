import { styled, darken, lighten, CSSInterpolation } from '@mui/material/styles';

export const Table = styled('table')((props) => ({
  fontSize: '1rem',
  fontFamily: props.theme.typography.fontFamily,
  color: props.theme.palette.text.primary,
  width: '100%',
  borderCollapse: 'collapse',
}));

export const TableRow = styled('tr')<{ hoverable?: boolean, inverted?: boolean }>((props) => {
  const palBg = props.theme.palette.background;
  let [background, border] = [palBg['paper'], palBg['default']];
  if (props.inverted) {
    [background, border] = [border, background];
  }

  const styles: CSSInterpolation = {
    backgroundColor: background,
    height: '4.4rem',
    border: 0,
    borderStyle: 'solid',
    borderColor: border,
    borderBottomWidth: '0.4rem',
  };

  if (props.hoverable) {
    const hoverStyles: CSSInterpolation = {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: props.theme.palette.mode === 'light'
          ? darken(background, 0.05)
          : lighten(background, 0.05)
      },
    }
    Object.assign(styles, hoverStyles);
  }

  return styles;
});

export const TableHead = styled('th')((props) => ({
  textTransform: 'uppercase',
  color: props.theme.palette.secondary.main,
  textAlign: 'left',
  padding: '0 2.7rem',
}));

export const TableData = styled('td')({
  padding: '0 2.7rem',
  userSelect: 'none',
});
