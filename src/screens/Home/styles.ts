import styled, { css } from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('screen').width - 50;

interface ActionButtonProps {
  border: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color: 'yellow' | 'red' | 'blue' | 'green';
  onPress: Function;
  active?: boolean;
}

export const Container = styled.View`
  margin-top: ${Platform.OS === 'android' ? Constants.statusBarHeight - 24 : 0}px;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const Background = styled(LinearGradient)`
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const GameBoard = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${screenWidth}px;
  height: ${screenWidth}px;
  background-color: #000;
  border-radius: ${screenWidth / 2}px;
`;

export const ActionWrapper = styled.View`
  max-height: 100%;
  max-width: 100%;
`;

export const ActionRow = styled.View`
  flex-direction: row;
  height: ${screenWidth / 2}px;
  width: 100%;
`;

export const ControlsRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin: 50px 0;
`;

export const ControlButton = styled.Pressable`
  height: 100px;
  width: 100px;
`;

export const ControlButtonGradient = styled(LinearGradient)`
  height: 100%;
  width: 100%;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  border: 5px solid #fff;
`;

export const ActionButton = styled.Pressable<ActionButtonProps>`
  flex: 1;
  background-color: ${({ color }) => color};
  border: 1px solid #282E3A;
  opacity: ${({ active }) => (active ? 1 : 0.3)};

  ${({ border }) => css`border-${border}-radius: ${screenWidth / 2}px`}
`;
