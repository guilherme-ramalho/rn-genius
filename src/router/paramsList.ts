import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Menu: undefined;
  Game: undefined;
  Lobby: { lobbyType: 'create' | 'join'} ;
}

export type NavigationProps<T extends keyof RootStackParamsList> = {
  navigation: NativeStackNavigationProp<RootStackParamsList, T>;
  route: RouteProp<RootStackParamsList, T>;
};
