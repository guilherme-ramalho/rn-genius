import Pusher from 'pusher-js/react-native';
import Config from 'react-native-config';

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

interface EventMessage {
  message: string;
}

const { PUSHER_ID, PUSHER_CLUSTER } = Config;

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
