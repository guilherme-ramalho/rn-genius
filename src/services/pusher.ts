import Pusher from 'pusher-js/react-native';
// eslint-disable-next-line import/no-unresolved
import { PUSHER_ID, PUSHER_CLUSTER } from 'react-native-dotenv';

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

interface EventMessage {
  message: string;
}

if (!PUSHER_ID || !PUSHER_CLUSTER) {
  throw new Error('Pusher .env variables are required but they are not available');
}

const pusher = new Pusher(PUSHER_ID, {
  cluster: PUSHER_CLUSTER,
});

const channel = pusher.subscribe('gaming-room');

export const bindEvent = (eventId: string) => {
  channel.bind(eventId, (message: EventMessage) => {
    alert(JSON.stringify(message));
  });
};

export const unsubscribeToChannel = (): void => {
  channel.unsubscribe();
};
