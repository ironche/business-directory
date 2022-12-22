import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from 'state';
import { Company } from 'api-models/company';
import { Table, TableHead, TableData, TableRow } from 'components/table';

export function CompaniesPage() {
  const { state } = useAppContext();
  const navigate = useNavigate();

  const rows = useMemo<Company[]>(() => {
    const { companies, search } = state;
    if (search) {
      return companies.filter((c) => new RegExp(search, 'gi').test(c.name));
    }
    return companies;
  }, [state]);

  return (
    <Table>
      <thead>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </thead>
      <tbody>
        {rows.map((company) => (
          <TableRow
            key={company.id}
            hoverable
            onClick={() => navigate(`company/${company.id}`)}
          >
            <TableData>{company.name}</TableData>
            <TableData>{company.description}</TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
