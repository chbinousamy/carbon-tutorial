import React, { useEffect, useState } from 'react';
import GitlabTable from './GitlabTable';
import {
  Link,
  DataTableSkeleton,
  Pagination,
  Grid,
  Column,
} from '@carbon/react';

const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={url}>GitLab</Link>
    </li>
  </ul>
);

const getRowItems = rows =>
  rows.map(row => ({
    ...row,
    key: row.id,
    createdAt: new Date(row.created_at).toLocaleDateString(),
    updatedAt: new Date(row.last_activity_at).toLocaleDateString(),
    links: <LinkList url={row.web_url} />,
  }));

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
    key: 'links',
    header: 'Links',
  },
];

const GitlabPage = () => {
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);
  useEffect(() => {
    async function getGitlabRepos() {
      const response = await fetch(
        'https://gitlab.com/api/v4/users/13460445/projects'
      );
      const jsonData = await response.json();
      if (response.status === 200) {
        console.log(jsonData);
        setRows(getRowItems(jsonData));
      } else {
        //console.log('Error obtaining repository data');
        setError('Error obtaining repository data');
      }
      setLoading(false);
    }
    getGitlabRepos();
  }, []);
  if (loading) {
    return (
      <Grid className="gitlab-page">
        <Column lg={16} md={8} sm={4} className="gitlab-page__r1">
          <DataTableSkeleton
            columnCount={headers.length + 1}
            rowCount={10}
            headers={headers}
          />
        </Column>
      </Grid>
    );
  }
  if (error) {
    return `Error! ${error}`;
  }
  return (
    <Grid className="gitlab-page">
      <Column lg={16} md={8} sm={4} className="gitlab-page__r1">
        <GitlabTable
          headers={headers}
          rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
        />
        <Pagination
          totalItems={rows.length}
          backwardText="Previous page"
          forwardText="Next page"
          pageSize={currentPageSize}
          pageSizes={[5, 10, 15, 25]}
          itemsPerPageText="Items per page"
          onChange={({ page, pageSize }) => {
            if (pageSize !== currentPageSize) {
              setCurrentPageSize(pageSize);
            }
            setFirstRowIndex(pageSize * (page - 1));
          }}
        />
      </Column>
    </Grid>
  );
};

export default GitlabPage;
