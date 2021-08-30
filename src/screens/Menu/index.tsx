import React from 'react';
import { Button, ButtonText } from './styles';
import {
  ControlButtonGradient,
} from '../../styles';
import Wrapper from '../../components/Wrapper';
import { NavigationProps } from '../../router/paramsList';

const Menu: React.FC<NavigationProps<'Menu'>> = ({ navigation }) => (
  <Wrapper>
    <Button onPress={() => navigation.navigate('Game')}>
      <ControlButtonGradient>
        <ButtonText>Single Player</ButtonText>
      </ControlButtonGradient>
    </Button>
    <Button onPress={() => navigation.navigate('Lobby', { lobbyType: 'create' })}>
      <ControlButtonGradient>
        <ButtonText>Create Lobby</ButtonText>
      </ControlButtonGradient>
    </Button>
    <Button onPress={() => navigation.navigate('Lobby', { lobbyType: 'join' })}>
      <ControlButtonGradient>
        <ButtonText>Join Lobby</ButtonText>
      </ControlButtonGradient>
    </Button>
  </Wrapper>
);

export default Menu;
