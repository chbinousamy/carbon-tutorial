import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';
import GithubTable from './GithubTable';
import {
  Link,
  DataTableSkeleton,
  Pagination,
  Grid,
  Column,
} from '@carbon/react';

const octokitClient = new Octokit({});

const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={url}>GitHub</Link>
    </li>
    {homepageUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={homepageUrl}>Homepage</Link>
      </li>
    )}
  </ul>
);

const getRowItems = rows =>
  rows.map(row => ({
    ...row,
    key: row.id,
    license: row.license?.name,
    createdAt: new Date(row.created_at).toLocaleDateString(),
    updatedAt: new Date(row.updated_at).toLocaleDateString(),
    links: <LinkList url={row.html_url} homepageUrl={row.homepage} />,
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
    key: 'license',
    header: 'License',
  },
  {
    key: 'links',
    header: 'Links',
  },
];

const GithubPage = () => {
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);
  useEffect(() => {
    async function getGithubRepos() {
      const res = await octokitClient.request('GET /users/{username}/repos', {
        username: 'chbinousamy',
        per_page: 100,
        sort: 'name',
        direction: 'desc',
      });

      if (res.status === 200) {
        //console.log(res.data);
        setRows(getRowItems(res.data));
      } else {
        setError('Error obtaining repository data');
      }
      setLoading(false);
    }
    getGithubRepos();
  }, []);
  if (loading) {
    return (
      <Grid className="github-page">
        <Column lg={16} md={8} sm={4} className="github-page__r1">
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
    <Grid className="github-page">
      <Column lg={16} md={8} sm={4} className="github-page__r1">
        <GithubTable
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

export default GithubPage;
