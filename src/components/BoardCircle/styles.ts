import styled from 'styled-components/native';

export const Circle = styled.View`
  flex: 1;
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: #AFB0B3;
  border: 15px solid #000;
  justify-content: center;
  align-items: center;
`;

export const LogoRow = styled.View`
  height: 90px;
  width: 180px;
  background-color: blue;
  /* border-top-left-radius: 90px;
  border-top-right-radius: 90px; */
`;

export const ControlsRow = styled.View`
  height: 90px;
  width: 180px;
  background-color: red;
  /* border-bottom-left-radius: 90px;
  border-bottom-right-radius: 90px; */
`;
