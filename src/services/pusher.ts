import Pusher from 'pusher-js/react-native';

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

interface EventMessage {
  message: string;
}

const pusher = new Pusher('2c44b5b14683ca33b856', {
  cluster: 'us2',
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
