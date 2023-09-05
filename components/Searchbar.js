import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar, IconButton } from 'react-native-paper';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <View style={styles.searchBarContainer}>
      <Searchbar
        placeholder="Film Ara..."
        onChangeText={handleSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <IconButton
        icon="filter"
        size={24}
        onPress={() => {
          // Handle filter button press here
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
  },
});

export default SearchBar;
