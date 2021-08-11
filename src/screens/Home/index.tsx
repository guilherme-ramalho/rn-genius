import React, { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
// import beepSound from '../../../assets/sounds/beep.wav';

import BoardCircle from '../../components/BoardCircle';

import {
  Container,
  GameBoard,
  ActionRow,
  ActionButton,
  ActionWrapper,
} from './styles';

const Home: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | undefined>();
  const [generatedMoves, setGeneratedMoves] = useState<Array<number>>([]);
  const [playedMoves, setPlayedMoves] = useState<Array<number>>([]);
  const beepSound = require('../../../assets/sounds/beep.wav');

  const generateRandomMove = () => {
    const number = Math.floor(Math.random() * (4 - 1 + 1) + 1);

    return number;
  };

  const playBeepSound = async () => {
    const { sound } = await Audio.Sound.createAsync(beepSound, {
      shouldPlay: true,
    });

    await sound.playAsync();
  };

  const sleep = (delay = 1000) => new Promise((resolve) => setTimeout(resolve, delay));

  const addNewMove = () => {
    const move = generateRandomMove();

    setGeneratedMoves([...generatedMoves, move]);
  };

  const activateButton = async (index: number) => {
    playBeepSound();
    setActiveButton(index);
    await sleep(400);
    setActiveButton(undefined);
  };

  const onActionButtonTouch = (index: number) => {
    console.log(`Clicked button: ${index}`);
    setPlayedMoves([...playedMoves, index]);
  };

  const displayGeneratedMoves = async () => {
    for (let i = 1; i <= generatedMoves.length; i++) {
      const move = generatedMoves[i - 1];
      activateButton(move);
      await sleep();
    }

    setActiveButton(undefined);
  };

  const areMovesRight = () => {
    const allMovesAreRight = playedMoves.every(
      (current, index) => current === generatedMoves[index],
    );

    return allMovesAreRight;
  };

  useEffect(() => {
    if (generatedMoves.length === 0) {
      const firstMove = generateRandomMove();

      setGeneratedMoves([firstMove]);
    }
  }, []);

  useEffect(() => {
    if (generatedMoves.length > 0) {
      displayGeneratedMoves();
    }
  }, [generatedMoves]);

  useEffect(() => {
    if (playedMoves.length === generatedMoves.length) {
      const movesAreRight = areMovesRight();

      if (movesAreRight) {
        addNewMove();
        setPlayedMoves([]);
      } else {
        alert('Too bad! You\'ve missed!');
      }
    }
  }, [playedMoves]);

  return (
    <Container>
      <GameBoard>
        <ActionWrapper>
          <ActionRow>
            <ActionButton
              active={activeButton === 1}
              onPress={() => onActionButtonTouch(1)}
              border="top-left"
              color="yellow"
            />
            <ActionButton
              active={activeButton === 2}
              onPress={() => onActionButtonTouch(2)}
              border="top-right"
              color="blue"
            />
          </ActionRow>
          <ActionRow>
            <ActionButton
              active={activeButton === 3}
              onPress={() => onActionButtonTouch(3)}
              border="bottom-left"
              color="red"
            />
            <ActionButton
              active={activeButton === 4}
              onPress={() => onActionButtonTouch(4)}
              border="bottom-right"
              color="green"
            />
          </ActionRow>
        </ActionWrapper>
      </GameBoard>
      <BoardCircle score={generatedMoves.length - 1} />
    </Container>
  );
};

export default Home;
