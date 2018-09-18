// @flow
import * as React from 'react';
import renderer from 'react-test-renderer';

import Text from '../Text';

test('renders Text correctly', () => {
  const tree = renderer.create(<Text>This is my Text</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});
