import React, { useState } from 'react';
import { Audio } from 'expo-av';

import { useInterval } from '../../hooks/index';

import {
  Container, CenterCircle, GameBoard, ActionRow, ActionButton, ActionWrapper,
} from './styles';

const Home: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | undefined>();

  useInterval(async () => {
    const number = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    const beep = require('../../../assets/sounds/beep.wav');

    const { sound } = await Audio.Sound.createAsync(beep);

    setActiveButton(number);

    await sound.playAsync();
  }, 1500);

  return (
    <Container>
      <GameBoard>
        <ActionWrapper>
          <ActionRow>
            <ActionButton active={activeButton === 1} border="top-left" color="yellow" />
            <ActionButton active={activeButton === 2} border="top-right" color="blue" />
          </ActionRow>
          <ActionRow>
            <ActionButton active={activeButton === 3} border="bottom-left" color="red" />
            <ActionButton active={activeButton === 4} border="bottom-right" color="green" />
          </ActionRow>
        </ActionWrapper>
      </GameBoard>
      <CenterCircle />
    </Container>
  );
};

export default Home;
