// @flow
import * as React from 'react';
import renderer from 'react-test-renderer';

import Title from '../Title';

test('renders Title correctly', () => {
  const tree = renderer.create(<Title>This is my title</Title>).toJSON();
  expect(tree).toMatchSnapshot();
});
