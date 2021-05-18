import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
  margin-top: ${Platform.OS === 'android' ? Constants.statusBarHeight : 0}px;
  background-color: red;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CenterCircle = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #000;
`;
