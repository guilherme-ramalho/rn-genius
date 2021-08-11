import styled from 'styled-components/native';

export const Wrapper = styled.View`
  position: absolute;
`;

export const Circle = styled.ImageBackground`
  flex: 1;
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: #AFB0B3;
  border: 2px solid #000;
  justify-content: center;
  align-items: center;
`;

export const ScoreHolder = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
  background-color: #773F33;
  width: 70px;
  border-radius: 3px;
`;

export const ScoreText = styled.Text`
  font-size: 32px;
  color: #E07E6E;
`;
