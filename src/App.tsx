import { useReducer } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Actions, initialState, reducer, AppContext } from 'state';
import { RootPage, rootLoader } from 'routes/root';
import ErrorPage from 'components/error-page';
import { CompaniesPage } from 'routes/companies';
import { CompanyPage } from 'routes/company';
import { getTheme } from 'theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <CompaniesPage />,
      },
      {
        path: 'company/:companyId',
        element: <CompanyPage />,
      },
    ],
  },
], {
  basename: process.env.REACT_APP_ROUTE_BASENAME,
});

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch, Actions }}>
      <ThemeProvider theme={getTheme(state.theme)}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
