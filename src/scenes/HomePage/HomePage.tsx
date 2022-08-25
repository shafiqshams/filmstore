import {ScrollView, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import styles from './HomePageStyles';
import Carousel from '../../components/Carousel/Carousel';
import {getRandomNumber} from '../../utils/getRandomNumber';
import {
  getCategories,
  getMoviesByCategoryId,
} from '../../services/movies/movies';
import {Movie, Category} from '../../typings';
import Headline from '../../components/Headline/Headline';
import TextHeader from '../../components/TextHeader/TextHeader';
import {APP_NAME} from '../../services/helpers/config';

const HomePage: FC<any> = ({navigation}) => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [allMovies, setAllMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    //First fetching the categories
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const {genres} = await getCategories();
    setCategories(genres);
  };

  useEffect(() => {
    let movies: Array<Movie> = [];
    const slicedCategories = categories.slice(0, 3);
    const fetchData = async () => {
      for (var i = 0; i < slicedCategories.length; i++) {
        const item: Category = slicedCategories[i];
        const {results} = await getMoviesByCategoryId(
          item.id,
          getRandomNumber(),
        );

        movies = [
          ...movies,
          {key: item.id.toString(), type: item.name, data: results},
        ];
      }
      setAllMovies(movies);
    };
    fetchData();
  }, [categories]);

  const handlePressFavorites = () => {
    navigation.navigate('Favorites');
  };

  const handlePressMovie = (movieId: number) => {
    navigation.navigate('Details', {
      movieId: movieId,
    });
  };

  const renderMovies = () => {
    return allMovies.map((movie: Movie) => {
      return (
        <View key={movie.key} style={styles.carouselWrapper}>
          <Headline title={movie.type} />
          <Carousel movies={movie.data} onPressMovie={handlePressMovie} />
        </View>
      );
    });
  };

  return (
    <ScrollView style={styles.mainWrapper}>
      <TextHeader
        headerText={APP_NAME}
        onPressFav={handlePressFavorites}
        textStyle={styles.textStyle}
      />
      {renderMovies()}
    </ScrollView>
  );
};

export default HomePage;
