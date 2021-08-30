import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Background = styled(LinearGradient).attrs({
  colors: ['#690099', '#750031'],
})`
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const ControlButtonGradient = styled(LinearGradient).attrs({
  colors: ['#4c669f', '#3b5998', '#192f6a'],
})`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 5px solid #fff;
  border-radius: 10px;
`;

export const Container = styled.View`
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const SafeArea = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
