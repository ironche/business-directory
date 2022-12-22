import { useLayoutEffect, useRef } from 'react';
import { useAppContext } from 'state';
import { useParams, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Typography, Skeleton } from '@mui/material';
import { loadImage } from 'utils/load-image';
import { Table, TableData, TableRow } from 'components/table';

export function CompanyPage() {
  const { state, dispatch, Actions } = useAppContext();
  const { companyId } = useParams();
  const navigate = useNavigate();
  const company = state.companies.find((c) => c.id === companyId);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    dispatch(Actions.setLoading(true));

    if (company?.image && imgRef.current) {
      loadImage(company.image, imgRef.current)
        .then(() => dispatch(Actions.setLoading(false)));
    }
  }, [company, imgRef, dispatch, Actions]);

  return (
    <GridContainer>
      <BannerContainer>
        <BannerLoadingContainer variant="rectangular" isloading={String(state.loading)} />
        <BannerImageContainer ref={imgRef} alt="Company banner" isloading={String(state.loading)} />
      </BannerContainer>

      <DataContainer>
        <AddressContainer>
          <ContainerTitle>Address</ContainerTitle>
          <Typography>
            {company?.name}
          </Typography>
          <Typography>
            {company?.address.number + ' ' + company?.address.street}
          </Typography>
          <Typography>
            {company?.address.city + ' ' + company?.address.zip + ', ' + company?.address.country}
          </Typography>
        </AddressContainer>

        <ContactContainer>
          <ContainerTitle>Contact</ContainerTitle>
          <Typography>
            {company?.phone}
          </Typography>
          <Typography>
            {company?.email}
          </Typography>
        </ContactContainer>

        <PlacesContainer>
          <ContainerTitle>Nearby places</ContainerTitle>
          <Table>
            <tbody>
              {state.companies
                .filter((c) => c.address.city === company?.address.city && c.id !== company.id)
                .map((c) => (
                  <TableRow
                    key={c.id}
                    hoverable
                    inverted
                    onClick={() => navigate(`../company/${c.id}`)}
                  >
                    <TableData>{c.name}</TableData>
                    <TableData>
                      {
                        c.address.number + ' ' +
                        c.address.street + ', ' +
                        c.address.city + ' ' +
                        c.address.zip
                      }
                    </TableData>
                  </TableRow>
                )
              )}
            </tbody>
          </Table>
        </PlacesContainer>
      </DataContainer>
    </GridContainer>
  );
}

const GridContainer = styled('div')`
  display: grid;
  grid: "banner" 23.75rem
        "data" auto
        / 1fr;
  row-gap: 2.375rem;
`;

const BannerContainer = styled('div')`
  grid-area: banner;
`;

const BannerLoadingContainer = styled(Skeleton)<{ isloading?: string; }>((props) => ({
  width: '100%',
  height: '100%',
  display: props.isloading === 'true' ? 'block' : 'none',
}));

const BannerImageContainer = styled('img')<{ isloading?: string; }>((props) => ({
  objectFit: 'cover',
  width: '100%',
  maxHeight: '100%',
  display: props.isloading !== 'true' ? 'block' : 'none',
}));

const DataContainer = styled('div')`
  grid-area: data;

  display: grid;
  grid: "address contact" auto
        "places places" auto
        / 1fr 1fr;

  @media (min-width: 1366px) {
    grid: "address contact places" auto
          / 1fr 1fr 2fr;
  }
`;

const AddressContainer = styled('address')`
  padding: 2.375rem;
  grid-area: address;
  font-style: normal;
`;

const ContactContainer = styled('div')`
  padding: 2.375rem;
  grid-area: contact;
`;

const PlacesContainer = styled('div')((props) => ({
  padding: '2.375rem',
  gridArea: 'places',
  backgroundColor: props.theme.palette.background.paper,
}));

const ContainerTitle = styled(Typography)({
  fontSize: '1.6rem',
  paddingBottom: '2rem',
})
