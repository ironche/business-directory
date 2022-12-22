import { useRouteError } from 'react-router-dom';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface GeneralError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as GeneralError;

  return (
    <PageWrapper>
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="subtitle1">Sorry, an unexpected error has occurred.</Typography>
      <Typography variant="body1">{error.statusText || error.message}</Typography>
    </PageWrapper>
  );
}

const PageWrapper = styled('article')((props) => ({
  backgroundColor: props.theme.palette.error.main,
  color: props.theme.palette.error.contrastText,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));
