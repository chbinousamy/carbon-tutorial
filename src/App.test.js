import React from 'react';
import { act } from 'react-dom/test-utils';
import RepoPage from './content/RepoPage';
import GithubPage from './content/GithubPage';
import GitlabPage from './content/GitlabPage';
import { mount } from 'enzyme';

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
  const wrapper = mount(<RepoPage />);

  expect(wrapper.find('.cds--pagination').length).toBe(0);

  await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

  wrapper.update();
  expect(wrapper.find('.cds--pagination').length).toBe(1);
});

it('renders a table with data and pagination', async () => {
  const wrapper = mount(<GithubPage />);

  expect(wrapper.find('.cds--pagination').length).toBe(0);

  await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

  wrapper.update();
  expect(wrapper.find('.cds--pagination').length).toBe(1);
});

it('renders a table with data and pagination', async () => {
  const wrapper = mount(<GitlabPage />);

  expect(wrapper.find('.cds--pagination').length).toBe(0);

  await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

  wrapper.update();
  expect(wrapper.find('.cds--pagination').length).toBe(1);
});
