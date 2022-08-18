import {ScrollView, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import styles from './HomePageStyles';
import HeaderComponent from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import {getRandomNumber} from '../../utils/getRandomNumber';
import {
  getCategories,
  getMoviesByCategoryId,
} from '../../services/movies/movies';
import {Movie, Category} from '../../typings';

const HomePage: FC<any> = ({}) => {
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
        movies.push({
          key: item.id.toString(),
          type: item.name,
          data: results,
        });
      }
      setAllMovies(movies);
    };
    fetchData();
  }, [categories]);

  const renderMovies = () => {
    return allMovies.map((movie: Movie) => {
      return (
        <View key={movie.key} style={styles.carouselWrapper}>
          <Carousel movies={movie.data} />
        </View>
      );
    });
  };
  return (
    <ScrollView style={styles.mainWrapper}>
      <>
        <HeaderComponent title="Film Store" />
        {renderMovies()}
      </>
    </ScrollView>
  );
};

export default HomePage;
