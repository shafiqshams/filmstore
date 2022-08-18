export type Category = {
  id: number;
  name: string;
};

export type Movie = {
  key: string;
  type: string;
  data: [];
};

export type Title = {
  title: string;
};

export type MovieDetails = {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  poster_path: string;
};
