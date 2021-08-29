import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, ButtonText } from './styles';
import {
  ControlButtonGradient,
} from '../../styles';
import Wrapper from '../../components/Wrapper';
import { RootStackParamsList } from '../../router/paramsList';

interface MenuProps {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Menu'>;
}

const Menu: React.FC<MenuProps> = ({ navigation }) => (
  <Wrapper>
    <Button onPress={() => navigation.navigate('Game')}>
      <ControlButtonGradient>
        <ButtonText>Single Player</ButtonText>
      </ControlButtonGradient>
    </Button>
    <Button onPress={() => navigation.navigate('Lobby')}>
      <ControlButtonGradient>
        <ButtonText>Multiplayer</ButtonText>
      </ControlButtonGradient>
    </Button>
  </Wrapper>
);

export default Menu;
