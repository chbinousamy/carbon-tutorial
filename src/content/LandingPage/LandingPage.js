import React from 'react';
import { Grid, Column, DataTableSkeleton } from '@carbon/react';

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
  },
];
const LandingPage = () => {
  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <h1 className="landing-page__heading">--- Work In Progress ---</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <DataTableSkeleton
          columnCount={headers.length + 1}
          rowCount={10}
          headers={headers}
        />
      </Column>
    </Grid>
  );
};

export default LandingPage;
