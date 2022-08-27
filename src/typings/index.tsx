import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Favorites: undefined;
  Details: {movieId: number};
};

export type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

export type Category = {
  id: number;
  name: string;
};

export type Movie = {
  key: string;
  type: string;
  data: Array<MovieDetails>;
};

export type Title = {
  title: string;
};

export type MovieDetails = {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
};

export type MovieCardProps = {
  movieItem: MovieDetails;
  onPressMovie(id: number): void;
};

export type CarouselProps = {
  movies: MovieDetails[];
  onPressMovie(id: number): void;
};

export type FavoriteProps = {
  isFav: boolean;
  addToFavorite(): void;
  removeFavorite(): void;
};

export type TextHeaderProps = {
  headerText?: string;
  onPressBack?(): void;
  onPressFav?(): void;
};
