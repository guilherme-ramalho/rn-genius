import React, { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import beepSound from '../../../assets/sounds/beep.wav';

import BoardCircle from '../../components/BoardCircle';

import {
  Container,
  GameBoard,
  ActionRow,
  ActionButton,
  ActionWrapper,
  ControlsRow,
  ControlButton,
  Background,
  ControlButtonGradient,
} from './styles';

const beepSound = require('../../../assets/sounds/beep.wav');
const errorSound = require('../../../assets/sounds/error.wav');
const successSound = require('../../../assets/sounds/success.wav');

const Home: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | undefined>();
  const [generatedMoves, setGeneratedMoves] = useState<Array<number>>([]);
  const [playedMoves, setPlayedMoves] = useState<Array<number>>([]);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [isDisplayingMoves, setIsDisplayingMoves] = useState<boolean>(false);
  const boardColors = ['yellow', 'blue', 'red', 'green'];

  const generateRandomMove = (): number => {
    // This generates a number between 1 and 4
    const number = Math.floor(Math.random() * (4 - 1 + 1) + 1);

    return number;
  };

  const getSoundToPlay = (soundTitle: string) => {
    switch (soundTitle) {
      case 'error':
        return errorSound;
      case 'success':
        return successSound;
      default:
        return beepSound;
    }
  };

  const playSound = async (soundTitle: 'beep'| 'error' | 'success'): Promise<void> => {
    const soundToPlay = getSoundToPlay(soundTitle);

    const { sound } = await Audio.Sound.createAsync(soundToPlay, {
      shouldPlay: true,
    });

    await sound.playAsync();
  };

  const sleep = (delay = 1000) => new Promise((resolve) => setTimeout(resolve, delay));

  const addNewMove = (): void => {
    const move = generateRandomMove();

    setGeneratedMoves([...generatedMoves, move]);
  };

  const activateButton = async (index: number): Promise<void> => {
    playSound('beep');
    setActiveButton(index);
    await sleep(400);
    setActiveButton(undefined);
  };

  const onActionButtonTouch = async (index: number): Promise<void> => {
    if (!isDisplayingMoves && gameStarted) {
      const pressedColor = boardColors[index - 1];

      console.log(`Clicked the ${pressedColor} button`);
      activateButton(index);
      setPlayedMoves([...playedMoves, index]);
    } else {
      console.log('Action button not allowed at this time');
    }
  };

  const displayGeneratedMoves = async (): Promise<void> => {
    if (generatedMoves.length > 1) {
      await sleep(1000);
    }

    setIsDisplayingMoves(true);

    for (let i = 1; i <= generatedMoves.length; i++) {
      const move = generatedMoves[i - 1];
      activateButton(move);
      await sleep();
    }

    setIsDisplayingMoves(false);

    setActiveButton(undefined);
  };

  const areMovesRight = (): boolean => {
    const allMovesAreRight = playedMoves.every(
      (current, index) => current === generatedMoves[index],
    );

    return allMovesAreRight;
  };

  const resetGame = (): void => {
    setGameStarted(false);
    setIsDisplayingMoves(false);
    setGeneratedMoves([]);
  };

  useEffect(() => {
    if (gameStarted && generatedMoves.length === 0) {
      const firstMove = generateRandomMove();

      setGeneratedMoves([firstMove]);
      setGameStarted(true);
      console.log('The game was started');
    } else {
      resetGame();
    }
  }, [gameStarted]);

  // Displays the moves everytime a new one is added
  useEffect(() => {
    if (generatedMoves.length > 0) {
      console.log('Displaying the next moves');
      displayGeneratedMoves();
    }
  }, [generatedMoves]);

  // Checks the played moves
  useEffect(() => {
    if (gameStarted && playedMoves.length === generatedMoves.length) {
      const movesAreRight = areMovesRight();

      if (movesAreRight) {
        playSound('success');
        console.log('Moves are right. Adding a new move.');
        addNewMove();
      } else {
        playSound('error');
        alert('Too bad! You\'ve missed!');
        resetGame();
      }

      setPlayedMoves([]);
    }
  }, [playedMoves]);

  return (
    <Container>
      <Background colors={['#690099', '#750031']}>
        <ControlsRow>
          <ControlButton onPress={() => setGameStarted(!gameStarted)}>
            <ControlButtonGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
              <MaterialCommunityIcons name={gameStarted ? 'stop' : 'play'} size={48} color="#fff" />
            </ControlButtonGradient>
          </ControlButton>
        </ControlsRow>
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
          <BoardCircle score={generatedMoves.length} />
        </GameBoard>
      </Background>
    </Container>
  );
};

export default Home;
