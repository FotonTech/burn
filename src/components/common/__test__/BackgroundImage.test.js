import React from 'react';
import renderer from 'react-test-renderer';

import BackgroundImage from '../BackgroundImage';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <BackgroundImage
        source={require('../../../../public/img/background.png')}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
