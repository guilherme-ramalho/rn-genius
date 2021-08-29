import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Menu: undefined;
  Game: undefined;
  Lobby: undefined;
}

export type NavigationProps<T extends keyof RootStackParamsList> = {
  props: NativeStackScreenProps<RootStackParamsList, T>;
  route: RouteProp<RootStackParamsList, T>;
};
