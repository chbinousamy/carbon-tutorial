import React, { useEffect, useState } from 'react';
import HomebrewTable from './HomebrewTable';
import {
  DataTableSkeleton,
  Pagination,
  Grid,
  Column,
  Link,
  Search,
} from '@carbon/react';

const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={url}>Github</Link>
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
    version: row.versions.stable,
    license: row.license,
    links: (
      <LinkList
        url={
          'https://github.com/Homebrew/homebrew-core/blob/HEAD/' +
          row.ruby_source_path
        }
        homepageUrl={row.homepage}
      />
    ),
  }));

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'version',
    header: 'Version',
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

var indexed;

const HomebrewPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getHomebrewRepos() {
      const response = await fetch('https://formulae.brew.sh/api/formula.json');
      const jsonData = await response.json();
      if (response.status === 200) {
        indexed = jsonData.map((item, id) => Object.assign(item, { id }));
        //console.log(indexed);
        setRows(getRowItems(indexed));
      } else {
        //console.log('Error obtaining repository data');
        setError('Error obtaining repository data');
      }
      setLoading(false);
    }
    getHomebrewRepos();
  }, []);

  if (loading) {
    return (
      <Grid className="homebrew-page">
        <Column lg={16} md={8} sm={4} className="homebrew-page__r1">
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

  const handleChange = e => {
    console.log('Value from event:', e.target.value);
    setSearchInput(e.target.value);
    console.log('Value from searchInput:', searchInput);
    setRows(
      getRowItems(
        indexed.filter(row =>
          row.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      )
    );
  };

  const handleClear = () => {
    setRows(getRowItems(indexed));
  };

  return (
    <Grid className="homebrew-page">
      <Column lg={16} md={8} sm={4} className="homebrew-page__r1">
        <Search
          size="sm"
          playgroundWidth={50}
          type="text"
          placeholder="Filter library name"
          onChange={handleChange}
          closeButtonLabelText="Clear search input"
          onClear={handleClear}
        />
      </Column>
      <Column lg={16} md={8} sm={4} className="homebrew-page__r1">
        <HomebrewTable
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

export default HomebrewPage;
