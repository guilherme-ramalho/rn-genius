import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, ButtonText, SafeArea } from './styles';
import {
  Container, Background, ControlButtonGradient,
} from '../../styles';
import { RootStackParamsList } from '../../router/paramsList';

interface MenuProps {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Menu'>;
}

const Menu: React.FC<MenuProps> = ({ navigation }) => (
  <Container>
    <Background>
      <SafeArea>
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
      </SafeArea>
    </Background>
  </Container>
);

export default Menu;
