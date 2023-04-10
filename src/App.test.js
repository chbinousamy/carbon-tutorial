import { render, screen } from '@testing-library/react';

import RepoPage from './content/RepoPage';
import GithubPage from './content/GithubPage';

test('renders the landing page', () => {
  render(<RepoPage />);
  expect(screen.getByRole('table')).toHaveTextContent(/Created/);
});

test('renders the github page', () => {
  render(<GithubPage />);
  expect(screen.getByRole('table')).toHaveTextContent(/Created/);
});

/*
import React from 'react';
import { act } from 'react-dom/test-utils';
import RepoPage from './content/RepoPage';
import GithubPage from './content/GithubPage';
import GitlabPage from './content/GitlabPage';
import { mount } from 'enzyme';
import {render, screen} from '@testing-library/react'


jest.mock('@octokit/core', () => {
  return {
    __esModule: true,
    Octokit: jest.fn().mockImplementation(() => {
      return {
        request: () => {
          return Promise.resolve({
            status: 200,
            data: [],
          });
        },
      };
    }),
  };
});

it('renders a table with data and pagination', async () => {
  await act(() => {
    render(<RepoPage />);
  })

  expect(screen.getByRole("table")).toHaveTextContent(/Carbon Repositories/);

  await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
  wrapper.update();

  await act(() => {
    expect(screen.firstChild.classList.contains('.cds--pagination')).toBe(true);
  })
});
*/
