import styled, { css } from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';

const screenWidth = Dimensions.get('screen').width - 20;

interface ActionButtonProps {
  border: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color: string;
  active?: boolean;
}

export const Container = styled.SafeAreaView`
  margin-top: ${Platform.OS === 'android' ? Constants.statusBarHeight : 0}px;
  background-color: red;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const GameBoard = styled.View`
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

export const CenterCircle = styled.View`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: green;
  border: 10px solid #282E3A;
`;

export const ActionButton = styled.Pressable<ActionButtonProps>`
  flex: 1;
  background-color: ${({ color }) => color};
  border: 5px solid #282E3A;
  opacity: ${({ active }) => (active ? 1 : 0.3)};

  ${({ border }) => css`border-${border}-radius: ${screenWidth / 2}px`}
`;
