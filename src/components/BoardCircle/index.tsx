import React from 'react';

import BoardImage from '../../../assets/img/board-brand.png';

import {
  Circle, ScoreHolder, ScoreText, Wrapper,
} from './styles';

interface IProps {
  score: number;
}

const BoardCircle: React.FC<IProps> = ({ score }) => {
  const getScore = () => (score < 10 ? `0${score}` : score.toString());

  return (
    <Wrapper>
      <Circle source={BoardImage}>
        <ScoreHolder>
          <ScoreText>{getScore()}</ScoreText>
        </ScoreHolder>
      </Circle>
    </Wrapper>
  );
};

export default BoardCircle;
