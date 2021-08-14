import styled, { css } from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';

const screenWidth = Dimensions.get('screen').width - 20;

interface ActionButtonProps {
  border: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color: 'yellow' | 'red' | 'blue' | 'green';
  onPress: Function;
  active?: boolean;
}

export const Container = styled.SafeAreaView`
  margin-top: ${Platform.OS === 'android' ? Constants.statusBarHeight : 0}px;
  height: 100%;
  justify-content: flex-start;
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
  border-radius: 50px;
  background-color: red;
  justify-content: center;
  align-items: center;
  border: 7px solid #000;
`;

export const ActionButton = styled.Pressable<ActionButtonProps>`
  flex: 1;
  background-color: ${({ color }) => color};
  border: 1px solid #282E3A;
  opacity: ${({ active }) => (active ? 1 : 0.3)};

  ${({ border }) => css`border-${border}-radius: ${screenWidth / 2}px`}
`;
