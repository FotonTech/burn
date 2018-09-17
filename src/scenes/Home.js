// @flow
import * as React from "react"
import styled from "styled-components/native"
import { connect } from "react-redux"
import * as Animatable from "react-native-animatable"
import type { NavigationScreenProp } from "react-navigation"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { counterPlusAction, counterMinusAction } from "../redux/actions/counter"
import { Text, Title, Button, BackgroundImage } from "../components/common"

const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
`

const TopContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 20px;
`

const BottomContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  margin-bottom: 20px;
`

const CounterWrapper = styled.View`
  flex: 2;
  align-items: center;
  justify-content: flex-start;
`

const ButtonsWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`

type Props = {
  fetchQuestions: () => void,
  navigation: NavigationScreenProp
}

class Home extends React.Component<Props> {
  handleStartClick() {
    const { navigation } = this.props
    setTimeout(() => {
      navigation.navigate("Game")
    }, 200)
    this.refs.rocketImage.transitionTo({ marginBottom: 700, opacity: 0 })
  }

  render() {
    const { count, counterMinus, counterPlus } = this.props;
    return (
      <Wrapper>
        <BackgroundImage source={require("../../public/img/background.png")} />
        <TopContainer>
          <Title>You </Title>
          <Title>can start</Title>
          <Title>your project</Title>
          <Text>by: Jabur</Text>
        </TopContainer>
        <BottomContainer>
          <CounterWrapper>
            <Title>{count}</Title>
          </CounterWrapper>
          <ButtonsWrapper>
            <Button
            onPress={() => counterMinus()}
            text="Minus"
            />
            <Button
              onPress={() => counterPlus()}
              text="Plus"
              testID="StartAdventureButton"
              isGreen
            />
          </ButtonsWrapper>
        </BottomContainer>
      </Wrapper>
    )
  }
}

// Redux
const mapStateToProps = state => ({
  count: state.count,
})

const mapDispatchToProps = dispatch => ({
  counterPlus: () => {
    dispatch(counterPlusAction())
  },
  counterMinus: () => {
    dispatch(counterMinusAction())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
