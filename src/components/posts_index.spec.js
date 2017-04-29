import React from 'react';
import { shallow } from 'enzyme';
import PostsIndex from './posts_index';

describe('Posts Index', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PostsIndex />);
  });

  it('renders without crashing', () => {
    shallow(<PostsIndex />);
  });

  it('renders a title', () => {
    const title = (<h1>Posts Index</h1>);
    expect(wrapper).toContainReact(title);
  });
});
