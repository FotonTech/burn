// @flow
import * as React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import Button from '../Button';

describe('<Button />', () => {
  it('renders Button with text', () => {
    const tree = renderer.create(<Button text="Button text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Button with text and isGreen', () => {
    const tree = renderer
      .create(<Button text="Button text" isGreen />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Button with children', () => {
    const tree = renderer
      .create(
        <Button>
          <Text>This is the children text</Text>
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
