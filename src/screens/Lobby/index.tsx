import React, { useEffect, useState } from 'react';
import { bindEvent } from '../../services/pusher';
import {
  Input, Container, Label, Row, Loader,
} from './styles';

import Wrapper from '../../components/Wrapper';
import { NavigationProps } from '../../router/paramsList';

const Lobby: React.FC<NavigationProps<'Lobby'>> = ({ navigation, route }) => {
  const { lobbyType } = route.params;

  const generateId = () => (Math.floor(Math.random() * 90000) + 10000).toString();

  const [lobbyCode, setLobbyCode] = useState(lobbyType === 'create' ? generateId() : '');

  console.log(lobbyType);

  useEffect(() => {
    if (lobbyType === 'create') {
      bindEvent(lobbyCode);
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Label>Here is your code</Label>
          <Input
            value={lobbyCode}
            onChangeText={setLobbyCode}
            editable={lobbyType === 'join'}
            maxLength={5}
          />
        </Row>
        {lobbyType === 'create'}
        <Loader />
      </Container>
    </Wrapper>
  );
};

export default Lobby;
