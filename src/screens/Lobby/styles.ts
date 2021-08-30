import styled from 'styled-components/native';

export const Input = styled.TextInput`
  height: 45px;
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid #000;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Row = styled.View`
  margin: 10px;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#fff',
})`
  display: flex;
`;
