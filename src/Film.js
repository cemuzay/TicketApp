import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FavoritesCarousel from '../components/FavoritesCarousel';
import Search from '../components/Search';
import { SearchBar } from 'react-native-screens';

const Film = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Search />
        <View>
          <Text style={styles.Vizyon}>Vizyondakiler</Text>
        </View>
        <FavoritesCarousel />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Vizyon: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: 'indigo',
    fontWeight: 'bold', 
    margin: 10,
  },
});

export default Film;
