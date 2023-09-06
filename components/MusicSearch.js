import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar, IconButton } from 'react-native-paper';
const Search = ({ handleSearch, handleFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearch = (query) => {
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <View style={styles.searchBarContainer}>
      <Searchbar
        placeholder="Konser Ara..."
        onChangeText={onSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <IconButton
        icon="filter"
        size={24}
        onPress={handleFilter} 
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

export default Search;
