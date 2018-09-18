// @flow
import * as React from 'react';
import styled from 'styled-components/native';

type ButtonProps = {
  isGreen?: boolean,
};

const Button = styled.TouchableOpacity`
  padding: 15px 25px 15px 25px;
  border-radius: 50;
  background-color: ${(props: ButtonProps) =>
    props.isGreen ? 'rgba(106,227,104, 0.8)' : 'rgba(0, 0, 0, 0.4)'};
`;
const ButtonText = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: #ffffff;
`;
type Props = {
  text?: string,
  isGreen?: boolean,
  children?: React.Node,
};

export default ({ text, isGreen, children, ...props }: Props) => (
  <Button isGreen={isGreen} {...props}>
    {text ? <ButtonText>{text}</ButtonText> : children}
  </Button>
);
