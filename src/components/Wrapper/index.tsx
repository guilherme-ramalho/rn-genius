import React from 'react';

import { Container, Background, SafeArea } from '../../styles';

const Wrapper: React.FC = ({ children }) => (
  <Container>
    <Background>
      <SafeArea>
        {children}
      </SafeArea>
    </Background>
  </Container>
);

export default Wrapper;
