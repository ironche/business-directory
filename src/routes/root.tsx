import { useEffect } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Company } from 'api-models/company';
import { useAppContext } from 'state';
import TopBar from 'components/top-bar';

export function RootPage() {
  const companies = useLoaderData() as Company[];
  const { dispatch, Actions } = useAppContext();

  useEffect(() => {
    dispatch(Actions.setCompanies(companies));
  }, [companies, dispatch, Actions]);

  return (
    <PageWrapper>
      <TopBar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </PageWrapper>
  );
}

export function rootLoader(): Promise<Company[]> {
  return new Promise((resolve, reject) => {
    fetch('https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

const PageWrapper = styled('article')((props) => ({
  flexGrow: 1,
  backgroundColor: props.theme.palette.background.default,
  overflow: 'auto',
}));

const ContentWrapper = styled('div')({
  padding: '0 4rem 3rem',
});
